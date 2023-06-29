"use client"
import React, { useEffect, useState } from 'react';
import { useTransition, animated, useSpring } from '@react-spring/web';
import Image from 'next/image';

const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const fade = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 1000 },
        onRest: () => {
            setTimeout(() => {
                fadeOut();
            }, 2000);
        },
    });

    const fadeOut = () => {
        // Incrementar el índice para mostrar la siguiente imagen
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            fadeOut();
        }, 2000);

        return () => {
            clearInterval(timer);
        };
    }, [currentIndex, images.length]);

    return (
        <div className='h-full'>
            {images.map((image, index) => (
                <animated.div
                    key={index}
                    className="w-full h-full flex items-center justify-center"
                    style={{
                        ...fade,
                        display: currentIndex === index ? 'block' : 'none',
                    }}
                >
                    <Image
                        src={image.image}
                        alt={`Image ${index}`}
                        className="max-h-full max-w-full"
                    />
                </animated.div>
            ))}
        </div>
    );
};

export default ImageSlider;
