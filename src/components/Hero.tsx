"use client";

import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
    return (
        <div 
            className="relative w-full h-screen overflow-hidden"
            style={{
                maxWidth: '100%',
                maxHeight: '100%',
            }}
        >
            <Image
                src="/assets/heroImg.png"
                alt="Hero Image"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="w-full h-full object-cover"
                style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                }}
            />
        </div>
    );
};

export default Hero;
