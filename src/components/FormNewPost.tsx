"use client"

import { FormData } from "@/types/blogs"
import { ChangeEvent, FormEvent, useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const inputClass = "w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"

const FormNewPost = () => {
    const [formData, setFormData] = useState<FormData>({
        title: "",
        content: "",
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("Form Submitted")
        console.log(formData)
    }


    return (
       <form action="" className="max-w-md mx-auto p-4" onSubmit={handleSubmit}>
        <div className="mb-4">
            <Input type="text" className={inputClass} placeholder="Enter the title" name="title" value={formData.title} onChange={handleChange} />
        </div>
        <div className="mb-4">
            <Textarea name="content" className={inputClass} placeholder="Enter the content" value={formData.content} onChange={handleChange} />
        </div>
        <Button type="submit" className="w-full">Submit</Button>
       </form> 
      );
}
 
export default FormNewPost;