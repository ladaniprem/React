import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'
export default function RTF({name,control,label,defaultValue = ''}) {
  return (
    // <Editor
    // initialValue='default value'
    // init={
    //     {
    //         branding: false,
    //         height : 500,
    //         menubar: true,
    //         plugins: [
    //             'advlist autolink lists link image charmap print preview anchor',
    //             'searchreplace visualblocks code fullscreen',
    //             'insertdatetime media table paste code help wordcount'
    //         ],
    //         toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | \
    //                   bullist numlist outdent indent | removeformat | help',
    //         }
    //     }
    //     />
         <div className='w-full'>
         {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

         <Controller 
          name={name || 'content'}
          control = {control} // control object from react-hook-form their provided the control over the paraent element
           render={({field: {onChange}}) => (
           <Editor
    initialValue={defaultvalue}
    init={
        {
            initialValue: defaultValue,
            branding: false,
            height : 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | \
                      bullist numlist outdent indent | removeformat | help',
                      content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            }
        }
        onChange={onChange} // onChange is a function that will be called when the content of the editor changes
        />

           )}
         />
         </div>
      )
    }
