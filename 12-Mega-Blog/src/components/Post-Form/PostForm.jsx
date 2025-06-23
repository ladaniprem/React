import { useForm } from 'react-hook-form'
import appwriteServiceInstance from '../../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useCallback, useEffect } from 'react'

function PostForm({post}) {
  const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
    defaultValues: {
      title: post?.title || '',
      slug : post?.slug || '',
      content: post?.content || '',
      status: post?.status || 'active',
    },
  })

  const navigate = useNavigate()
  const userData = useSelector((state) => state.user.userData)

  const submit  = async (data) => {
    if (post) {
      const file =  data.image && data.image[0] ? await appwriteServiceInstance.uploadFile(data.image[0]) : null

      if (file) {
        await appwriteServiceInstance.deleteFile(post.featuredImage)
      }

      const dbpost = await appwriteServiceInstance.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : post.featuredImage,
      }) || undefined

      if (dbpost) {
        navigate(`/post/${dbpost.$id}`)
      }
    }
    else{
      const file = data.image && data.image[0] ? await appwriteServiceInstance.uploadFile(data.image[0]) : null
      if (file) {
        const fileId = file.$id
        data.featuredImage = fileId
      }
      const dbpost = await appwriteServiceInstance.createPost({
        ...data,
        userId: userData.$id,
      })
      if (dbpost) {
        navigate(`/post/${dbpost.$id}`)
      }  
    }
  }


  const slugTransform = useCallback((value) => {
     
    if (value && typeof value === 'string') {
      // one method 
      // const slug = value
      //   .toLowerCase()
      //   .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with hyphens
      //   .replace(/^-|-$/g, ''); // Remove leading and trailing hyphens
      //   setValue('slug', slug)
      //   return slug

      // second method
      return value
      .trim()
      .toLowerCase()
      .replace(/^[a-zA-Z\d\s]+/g,'-') 
      .replace(/\s/g, '-')

      // Note of regex
      // replace method me koy bi pattern match sakhete ho 
      // goble match first after [] use the combination ka match kar sakhe 
      // ^ sign use the their isko mat use karna 
      // - meaning range hota hai , \d meaning digit ,\s meaning space is sabi values ko chod ke baki sab me -(des) kar dege.
      // + use the sabko convert kar dega 
    }

    
     
  },[])

    useEffect(() => {
      const subscription = watch((value, { name }) => {
        if (name === 'title') {
          setValue('slug', slugTransform(value.title,
            {shouldValidate: true}));
        }
      })
      return () =>{
        subscription.unsubscribe()
    }
  },
    [watch, slugTransform, setValue])

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap gap-4 p-4 bg-gray-50 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="w-full lg:w-2/3 space-y-4">
        <Input
          label="Title :"
          placeholder="Title"
          className="w-full transition-all duration-300 focus:scale-[1.01]"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="w-full transition-all duration-300 focus:scale-[1.01]"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
          }}
        />
        <RTE 
          label="Content :" 
          name="content" 
          control={control} 
          defaultValue={getValues("content")} 
          className="animate-fade-in"
        />
      </div>
      <div className="w-full lg:w-1/3 space-y-4">
        <div className="transform transition-all duration-300 hover:scale-105">
          <Input
            label="Featured Image :"
            type="file"
            className="w-full file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-500 file:text-white hover:file:bg-blue-600 transition-colors duration-300"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("image", { required: !post })}
          />
        </div>
        {post && (
          <div className="w-full overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
            <img
              src={appwriteServiceInstance.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="w-full transition-all duration-300 hover:border-blue-500"
          {...register("status", { required: true })}
        />
        <Button 
          type="submit" 
          bgColor={post ? "bg-green-500" : "bg-blue-500"}
          className="w-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-lg py-2 text-white font-semibold"
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
  }

  export default PostForm;