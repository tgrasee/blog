import Link from 'next/link';
import React from 'react';

export default function Component({ id, title, content, date }: { id: string, title: string, content: string, date: string }) {
    return (
        <div key={id} className="border border-gray-200 p-4 my-4">
            <Link href={`/blog/post/${id}`}>
                <div className='inline-block'>
                    <h2 className='text-sky-600 font-bold'>{title}</h2>
                </div></Link>
            <p className="text-gray-500">{date}</p>
            <p>{content}</p>
        </div>
    );
}