"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "./ui/button"
import { useState, ChangeEvent } from "react"

const FormComment = () => {
    const [comment, setComment] = useState<string>("")

    const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
        setComment(e.target.value)
    }

    const handleSubmitComment = () => {
        console.log(comment)
    }

    return (
        <div>
            <div className="mt-4">
                <Label htmlFor="comments" className="block text-gray-700 text-sm font-bold mb-2">Add Comment</Label>
                <Input value={comment} onChange={handleCommentChange} type="text" className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:broder-blue-300" name="comment" />
                <Button onClick={handleSubmitComment} className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-md mt-2 disabled:bg-gray-400">Submit Comment</Button> 
            </div>
        </div>
    )
}
 
export default FormComment