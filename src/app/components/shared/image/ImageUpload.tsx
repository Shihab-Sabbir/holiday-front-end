import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { BiSolidImageAdd } from 'react-icons/bi';
import { TiDelete } from 'react-icons/ti';

export default function ImageUpload({uploadedImage, setUploadedImage}:{uploadedImage:any, setUploadedImage:any}) {
    const [logo, setLogo] = useState<any>(null); 

    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleImageClick = () => {
        if( fileInputRef.current){
            fileInputRef.current.click();
        }
    };

    const handleImageUpload = (e:any) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const imageDataURL = reader.result;
                setUploadedImage(file);
                setLogo(imageDataURL!);
            };
            reader.readAsDataURL(file);
        }
    };
    
    const handleImageRemove = () => {
        setUploadedImage(null);
        setLogo(null); 
        if( fileInputRef.current?.value){
            fileInputRef.current.value = ''
        }
    };

    return (
        <div>
            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: 'none' }}
            />
            {(!!uploadedImage || !!logo) ? (
                <div className="relative  h-[170px]">
                    <Image
                        src={(typeof(uploadedImage) == 'string' || uploadedImage?.result) ? (uploadedImage?.result ||uploadedImage): !!logo ? logo : ''}
                        alt="logo image"
                        className="border p-2 shadow h-full w-full"
                        layout="contained"
                        width={250}
                        height={20}
                        onClick={handleImageClick}
                        style={{ cursor: 'pointer' }}
                    />
                    <p
                        onClick={handleImageRemove}
                        className="absolute -top-2 -right-2 z-50 cursor-pointer text-2xl"
                    >
                        <TiDelete />
                    </p>
                </div>
            ) : (
                <div
                    className=" h-[170px] border shadow cursor-pointer text-7xl grid place-content-center text-blue-gray-300"
                    onClick={handleImageClick}
                >
                    <BiSolidImageAdd />
                </div>
            )}
        </div>
    );
}
