"use client";
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";

export function LinkPreviewAbout() {
    return (
        <div className="flex justify-center items-center flex-col px-4 mt-20">
            <div className={"text-left"}>
                <p className="text-neutral-500 dark:text-neutral-400 text-4xl md:text-5xl text-left mb-10">
                    Merci d'avoir utilisé{" "}
                    <LinkPreview
                        url="https://reactomatic.fr/"
                        className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                    >
                        Reactomatic
                    </LinkPreview>{" "}
                    pour vos configurations
                </p>

                <p className="text-neutral-500 dark:text-neutral-400 text-4xl md:text-2xl text-left mb-10">
                    Nous sommes un groupe de quatres personnes passionées souhaitant améliorer l'experience
                    utilisateur dans le monde de la configuration d'ordinateurs. Grâce à Reactomatic vous pourrez
                    profiter d'une interface utilisateur minimaliste vous emmenant à l'essentiel.
                </p>

                <p className=" font-bold text-neutral-500 dark:text-neutral-400 md:text-4xl text-left mb-10">
                    Qui compose l'équipe ?
                </p>

                <div className={"grid grid-cols-2 w-full place-items-center place-content-center gap-y-20"}>
                    <LinkPreview
                        url="http://senouci.dev"
                        className="font-bold bg-clip-text text-5xl text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                    >
                        Senouci Moulay
                    </LinkPreview>
                    <LinkPreview
                        url="https://github.com/Fabien382"
                        className="font-bold bg-clip-text md:text-5xl text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                    >
                        Nivon Fabien
                    </LinkPreview>
                    <LinkPreview
                        url="https://github.com/MolinaRomain"
                        className="font-bold bg-clip-text text-5xl text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                    >
                        Molina Romain
                    </LinkPreview>
                    <LinkPreview
                        url="https://github.com/Dakeinu"
                        className="font-bold bg-clip-text text-5xl text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                    >
                        Falcati Remi
                    </LinkPreview>
                </div>

                <p className="font-bold text-center text-neutral-500 dark:text-neutral-400 md:text-4xl mt-20 mb-10">
                    Application développée avec
                </p>

                <div className={"grid grid-cols-6 w-full place-items-center place-content-center"}>
                    <svg
                        viewBox="0 0 256 154"
                        width="70"
                        height="70"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid"
                    >
                        <defs
                        >
                            <linearGradient x1="-2.778%" y1="32%" x2="100%" y2="67.556%" id="gradient">
                                <stop stop-color="#2298BD" offset="0%"></stop>
                                <stop stop-color="#0ED7B5" offset="100%"></stop>
                            </linearGradient>
                        </defs>
                        <path
                            d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z"
                            fill="url(#gradient)"></path>
                    </svg>
                    <svg width="70" height="70" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_408_139" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0"
                            width="180" height="180">
                            <circle cx="90" cy="90" r="90" fill="black" />
                        </mask>
                        <g mask="url(#mask0_408_139)">
                            <circle cx="90" cy="90" r="87" fill="black" stroke="white" strokeWidth="6" />
                            <path
                                d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
                                fill="url(#paint0_linear_408_139)"
                            />
                            <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_408_139)" />
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_408_139" x1="109" y1="116.5" x2="144.5" y2="160.5"
                                gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_408_139" x1="121" y1="54" x2="120.799" y2="106.875"
                                gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>


                    <svg viewBox="0 0 264.6 255.6" width="70"
                        height="70" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M153.3 4.2c-1.8 0-3.5.4-5 1 3.3 2.1 5.1 5 6 8.3 0 .5.2.8.3 1.3l.1 1.1c.3 5.7-1.5 6.4-2.7 9.8-1.9 4.3-1.4 9 .9 12.7.2.5.4 1 .8 1.4-2.5-16.3 11.1-18.8 13.7-23.9.2-4.4-3.5-7.4-6.4-9.5a14.3 14.3 0 0 0-7.7-2.2zM174 8c-.3 1.5 0 1.1-.1 1.9l-.2 1.7-.4 1.5-.5 1.6-.8 1.5-.5.7-.4.6c-.3.5-.6 1-1 1.3-.3.4-.6.9-1 1.2l-1.3 1c-1.4 1.1-3 1.9-4.3 2.9-.5.3-1 .5-1.3 1-.5.2-.9.6-1.3 1l-1.1 1.2-1 1.3-.9 1.3-.7 1.5-.5 1.5a21 21 0 0 0-.5 1.6l-.1.9-.1.7-.1 1.7v1.1l.3 1.6c0 .6.1 1 .3 1.6l.5 1.5.4 1-14.8-5.8-7.5-2-4-1a120 120 0 0 0-11.8-1.7h-.4A115.5 115.5 0 0 0 87 34.9l-3 .6c-2 .3-3.9.8-5.7 1.2l-3 .8-2.7 1.2-2.2 1-.3.1-1.8 1-.5.1-2 1-1.2.7-.6.3-1.7 1-1.6 1-1.3.9-.1.1-1.3 1H58l-1 .8-.4.3-1 .8c0 .2-.1.2-.2.3l-1.2 1v.2c-.5.3-.9.7-1.2 1.1l-.2.1-1 1c0 .2-.3.3-.4.5l-1 1.1-.4.3-1.4 1.6-.2.2a38.1 38.1 0 0 1-7 6 48.9 48.9 0 0 1-12.1 6c-2.7.5-5.5 1.6-7.9 1.8l-1.6.2-1.6.4-1.6.6-1.5.7-1.4.9c-.5.3-1 .7-1.3 1.1-.5.3-1 .8-1.3 1.2l-1.1 1.3-1 1.4-.9 1.5-.7 1.7-.6 1.7-.3 1.5v.2L6 86.2v2.1a6.9 6.9 0 0 0 .7 2.4l.7 1.2.8 1.2a17.1 17.1 0 0 0 2.4 2c1.5 1.4 1.9 1.9 3.9 2.9l1 .5h.2v.4a13.3 13.3 0 0 0 1 3.1l.5 1.2.1.3a28.3 28.3 0 0 0 1.8 2.8l1 1.2 1.3 1.1h.1a14.2 14.2 0 0 0 5.4 3l.3.1.8.2c-.2 3.5-.3 6.8.3 8 .5 1.2 3.4-2.7 6.2-7.2-.4 4.4-.6 9.7 0 11.2.7 1.6 4.6-3.4 8-9a74.7 74.7 0 0 1 92 65.8c-.8-7-9.4-10.8-13.4-9.9-2 4.8-5.2 11-10.5 14.8.4-4.3.2-8.7-.7-13-1.4 6-4.2 11.5-8 16.3a18 18 0 0 1-15.5-7l-.5-.8-.5-1.4-.4-1.3V176c0-.5.1-1 .3-1.4 0-.4.2-.9.4-1.3l.8-1.4c1-3 1-5.6-1-7l-1.1-.7-.9-.3-.5-.2-1.4-.3a5 5 0 0 0-1.3-.2l-1.4-.1h-1l-1.4.2-1.4.3-1.3.4-1.3.6-1.3.7c-15 9.8-6 32.8 4.2 39.5-3.8.7-7.8 1.5-8.9 2.3l-.1.2a60.9 60.9 0 0 0 19.2 7.4 61.5 61.5 0 0 0 72.6-51.3l.4 1.7c.2 1.2.5 2.4.6 3.7l.2 1.7v.3l.2 1.6.1 2.2v5.4l-.1.8v1.5c-.2.2-.2.4-.2.5 0 .6 0 1-.2 1.5v.6c0 .7-.2 1.2-.3 1.9v.1l-.4 1.8v.2c0 .6-.2 1.2-.4 1.8v.2l-.5 1.8v.2l-.5 1.8v.1l-.6 2-.7 1.8-.8 1.9-.7 1.9c-.4.5-.6 1.2-1 1.8l-.1.4s0 .2-.2.2a61.2 61.2 0 0 1-18.1 21.7l-1.6 1.1c0 .2-.3.2-.4.4l-1.4 1 .2.3 2.7-.4h.1a137.7 137.7 0 0 0 6.5-1.2l.9-.2 1.3-.3 1.2-.3c6.4-1.5 12.7-3.7 18.7-6.2-10.2 14-24 25.3-40.1 32.8a103.2 103.2 0 0 0 83.1-52.6c-2.7 15-8.6 29.1-17.4 41.5a101.7 101.7 0 0 0 44.5-69.2c2.2 10.2 2.8 20.7 1.8 31.1 46.7-65 4-132.5-14-150.3l-.1-.3v.1l-.1-.1-.2 2.3a87 87 0 0 1-.6 4.3l-1.1 4.3a53.7 53.7 0 0 1-3.5 8 44 44 0 0 1-9.9 12l-1.5 1.4a36 36 0 0 1-7.4 4.7l-4 1.8a45.5 45.5 0 0 1-8.6 2.3l-4.4.6a49.7 49.7 0 0 1-11.9-.8l-4.3-1.1a48 48 0 0 0 20.7-6.8l3.6-2.6 3.3-2.9 3-3.2c1-1.1 1.9-2.3 2.7-3.5.2-.1.3-.4.4-.6l1.9-3.1a44.5 44.5 0 0 0 3.5-8c.4-1.4.8-2.9 1-4.3.3-1.5.6-2.9.7-4.3l.3-4.4-.1-3.1-.6-4.3c-.2-1.5-.5-3-1-4.4-.4-1.3-.8-2.7-1.4-4.1-.5-1.4-1.1-2.7-1.8-4l-2.2-3.8a71.3 71.3 0 0 0-5.5-6.9 40.4 40.4 0 0 0-12-8.6C178 9.3 176 8.6 174 8z"
                            fill="#e0234e" fill-rule="evenodd" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="70"
                        height="70" viewBox="0 0 24 24" fill="#008fe2">
                        <path
                            d="M13.98 11.08h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19h-2.12a.18.18 0 0 0-.18.18v1.9c0 .1.08.18.18.18m-2.95-5.43h2.12a.19.19 0 0 0 .18-.19V3.57a.19.19 0 0 0-.18-.18h-2.12a.18.18 0 0 0-.19.18v1.9c0 .1.09.18.19.18m0 2.71h2.12a.19.19 0 0 0 .18-.18V6.29a.19.19 0 0 0-.18-.18h-2.12a.18.18 0 0 0-.19.18v1.89c0 .1.09.18.19.18m-2.93 0h2.12a.19.19 0 0 0 .18-.18V6.29a.18.18 0 0 0-.18-.18H8.1a.18.18 0 0 0-.18.18v1.89c0 .1.08.18.18.18m-2.96 0h2.11a.19.19 0 0 0 .19-.18V6.29a.18.18 0 0 0-.19-.18H5.14a.19.19 0 0 0-.19.18v1.89c0 .1.08.18.19.18m5.89 2.72h2.12a.19.19 0 0 0 .18-.19V9.01a.19.19 0 0 0-.18-.19h-2.12a.18.18 0 0 0-.19.18v1.9c0 .1.09.18.19.18m-2.93 0h2.12a.18.18 0 0 0 .18-.19V9.01a.18.18 0 0 0-.18-.19H8.1a.18.18 0 0 0-.18.18v1.9c0 .1.08.18.18.18m-2.96 0h2.11a.18.18 0 0 0 .19-.19V9.01a.18.18 0 0 0-.18-.19H5.14a.19.19 0 0 0-.19.19v1.88c0 .1.08.19.19.19m-2.92 0h2.12a.18.18 0 0 0 .18-.19V9.01a.18.18 0 0 0-.18-.19H2.22a.18.18 0 0 0-.19.18v1.9c0 .1.08.18.19.18m21.54-1.19c-.06-.05-.67-.51-1.95-.51-.34 0-.68.03-1.01.09a3.77 3.77 0 0 0-1.72-2.57l-.34-.2-.23.33a4.6 4.6 0 0 0-.6 1.43c-.24.97-.1 1.88.4 2.66a4.7 4.7 0 0 1-1.75.42H.76a.75.75 0 0 0-.76.75 11.38 11.38 0 0 0 .7 4.06 6.03 6.03 0 0 0 2.4 3.12c1.18.73 3.1 1.14 5.28 1.14.98 0 1.96-.08 2.93-.26a12.25 12.25 0 0 0 3.82-1.4 10.5 10.5 0 0 0 2.61-2.13c1.25-1.42 2-3 2.55-4.4h.23c1.37 0 2.21-.55 2.68-1 .3-.3.55-.66.7-1.06l.1-.28Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="70"
                        height="70" viewBox="0 0 722.8 702">
                        <path
                            style={{
                                fill: "#326ce5",
                                fillOpacity: 1,
                                stroke: "#fff",
                                strokeWidth: 0,
                                strokeMiterlimit: 4,
                                strokeOpacity: 1,
                                strokeDasharray: "none",
                            }}
                            d="M365 185a47 46 0 0 0-18 4L103 306a47 46 0 0 0-25 32L18 600a47 46 0 0 0 6 35 47 46 0 0 0 3 4l169 210a47 46 0 0 0 36 18h271a47 46 0 0 0 37-18l169-210a47 46 0 0 0 9-39l-60-263a47 46 0 0 0-26-31L388 189a47 46 0 0 0-23-4z"
                            transform="translate(-6 -175)"
                        />
                        <path
                            d="M368 274c-8 0-15 7-15 16v4l2 14 2 27c-1 3-3 6-5 7v7a190 190 0 0 0-122 58l-6-3c-2 0-5 1-8-1l-20-18-10-10-3-3c-3-2-7-4-10-4-5 0-9 2-12 5-5 7-3 16 4 22l3 3 12 7 22 15c2 2 3 7 3 8l5 5c-26 37-37 84-30 131l-6 2c-2 2-4 6-7 7l-26 4-14 1-4 1c-9 2-14 10-13 18 2 8 11 12 19 11h1v-1h4l13-5c9-4 17-7 25-8l9 3 6-1c15 45 45 82 84 105l-2 7c1 2 2 5 1 8l-13 24-8 11-2 4c-4 8-1 18 6 21 8 4 17 0 20-8l2-4 5-13c3-10 6-20 11-27l6-3 3-6a189 189 0 0 0 135 1l4 5c2 1 5 2 7 5l10 24 4 14 2 4c4 8 13 11 20 8 8-4 10-13 7-21l-2-4-8-12c-6-8-10-15-13-23-1-4 0-6 1-8l-2-6c40-24 70-62 84-106l6 1c2-2 4-4 8-3 8 1 16 4 26 7l13 5 4 1c9 2 17-3 19-10 2-8-4-16-12-18l-5-1-14-1c-10-1-18-2-26-5-3-1-5-5-6-6l-6-2a189 189 0 0 0-31-131l6-5c0-3 0-5 2-8 6-6 13-10 22-16l12-7 4-2c7-6 8-16 3-22s-15-7-22-1l-3 2-10 11c-7 7-13 13-19 17-3 2-7 2-9 1l-6 4c-31-33-75-54-121-58v-7c-2-2-5-3-5-7-1-8 0-16 1-27l2-14v-4c0-9-6-16-14-16zm-19 113-4 77a13 13 0 0 1-21 10l-63-44a151 151 0 0 1 88-43zm37 0c33 5 64 20 88 43l-63 44a13 13 0 0 1-21-10zm-148 71 58 52a13 13 0 0 1-5 22l-74 22c-4-35 4-68 21-96zm259 0a153 153 0 0 1 22 95l-74-21a13 13 0 0 1-5-22h-1l58-52zm-141 56h23l15 18-5 23-21 10-21-10-6-23zm75 62h3l77 13c-12 32-33 59-61 77l-30-72a13 13 0 0 1 11-18zm-128 1a13 13 0 0 1 12 18l-29 71c-27-18-49-44-61-77l76-12h2zm64 31c2-1 4 0 6 1 3 1 5 3 6 5l38 68a154 154 0 0 1-98-1l37-67c3-4 7-6 11-6z"
                            style={{
                                fontSize: "medium",
                                fontStyle: "normal",
                                fontVariant: "normal",
                                fontWeight: 400,
                                fontStretch: "normal",
                                textIndent: 0,
                                textAlign: "start",
                                textDecoration: "none",
                                lineHeight: "normal",
                                letterSpacing: "normal",
                                wordSpacing: "normal",
                                textTransform: "none",
                                direction: "ltr",
                                textAnchor: "start",
                                baselineShift: "baseline",
                                color: "#000",
                                fill: "#fff",
                                fillOpacity: 1,
                                stroke: "#fff",
                                strokeWidth: 0.25,
                                strokeMiterlimit: 4,
                                strokeOpacity: 1,
                                strokeDasharray: "none",
                                marker: "none",
                                visibility: "visible",
                                display: "inline",
                                overflow: "visible",
                                fontFamily: "Sans",
                            }}
                            transform="translate(-6 -175)"
                        />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="70"
                        height="70" preserveAspectRatio="xMidYMid" viewBox="0 0 256 264">
                        <path
                            d="M255 158c-2-5-6-8-11-9l-8 1-14 2c12-20 22-43 27-65 9-34 5-50-1-57a77 77 0 0 0-62-30c-14 0-27 3-33 5l-19-2c-12 0-24 3-33 8L78 5c-23-3-42 0-55 9C7 26-1 46 0 74a342 342 0 0 0 28 97c7 14 14 22 23 24 5 2 13 3 22-4l5 4 9 3c11 3 22 2 31-1a643 643 0 0 1 0 10 109 109 0 0 0 5 33c1 4 4 11 9 16 6 6 13 8 20 8l9-1c10-2 21-6 29-17s11-27 12-53v-2l1-2 1 1h1c10 0 22-2 30-6 5-2 24-12 20-26" />
                        <path
                            d="M238 161c-30 6-32-4-32-4 32-47 45-106 33-120-31-40-84-21-85-21l-20-2c-14 0-24 4-32 10 0 0-95-40-91 49 1 19 28 143 59 106l22-26c6 4 12 6 19 5h1v5c-8 9-6 10-22 14-16 3-7 9 0 11s25 4 36-12v2c3 2 5 16 5 29-1 12-1 21 2 27 2 7 5 22 26 18 17-4 27-14 28-30 1-12 3-10 3-20l1-5c2-16 1-21 12-19l2 1c8 0 19-2 25-5 13-6 21-16 8-13"
                            fill="#336791" />
                        <path
                            d="M108 82h-6l-1 2 1 3c1 2 3 3 5 3h1c3 0 6-2 6-4 1-2-3-4-6-4M197 82c0-2-4-3-7-2-3 0-6 1-6 3 1 2 3 4 6 4h1l4-2 2-3"
                            fill="#FFF" />
                        <path
                            d="M248 160c-1-3-5-5-11-3-18 3-24 1-27-1 14-21 26-47 32-71 3-11 5-22 5-30 0-10-2-17-5-21a70 70 0 0 0-57-27c-16 0-30 4-33 6-5-2-12-3-18-3-13 0-23 3-32 9-4-2-14-5-26-7-21-3-37-1-49 8C13 30 6 48 8 73c0 8 5 35 13 60 10 33 21 51 32 55l5 1c4 0 9-2 14-9l21-22c4 2 9 3 14 3v1l-2 3c-4 5-5 5-16 8-3 0-12 2-12 8 0 7 10 10 11 10l12 1c9 0 17-3 24-8-1 23 0 46 3 53 3 6 8 20 26 20l9-1c18-4 26-12 29-30l6-45 11 1c8 0 17-2 23-5 7-3 19-10 17-17Zm-44-83-1 10-2 12 1 14c1 9 3 19-2 28l-2-4-3-6c-7-12-22-39-14-50 2-3 8-6 23-4Zm-18-62c21 0 38 8 50 23 9 12-1 65-30 111l-1-1c7-13 6-25 5-36l-1-13 1-11a72 72 0 0 0 1-16c0-5-6-20-18-34-6-7-16-16-28-21l21-2ZM67 176c-6 7-10 6-12 5-8-3-19-21-27-51-8-25-13-50-13-57-1-23 4-39 16-47 20-14 52-6 64-2v1C74 46 74 82 74 85v3c1 7 2 18 0 31a38 38 0 0 0 12 34l-19 23Zm22-30c-6-7-9-16-8-26 2-14 1-26 1-32v-2c3-3 17-11 27-8 5 1 8 4 9 9 6 28 1 40-4 50l-2 5-1 2-3 10c-7 0-14-3-19-8Zm1 38-5-2 6-2c13-3 15-5 19-10l4-5c3-3 4-2 6-1 1 0 3 2 4 5l-1 4c-9 13-23 13-33 11Zm70 65c-16 3-22-5-26-15a293 293 0 0 1-3-67c-2-5-5-9-8-10-2-1-5-2-8-1l3-10 1-1 2-5c5-10 11-24 4-54-2-12-11-17-23-16a54 54 0 0 0-20 7c1-12 5-33 18-47 9-8 20-13 34-12 27 0 44 14 54 26 8 10 13 20 15 25-14-1-23 1-28 8-10 15 6 44 13 57l3 6 8 13 2 2c-4 2-11 4-11 18l-6 51c-3 16-8 21-24 25Zm68-78c-4 2-11 3-18 3-8 1-11 0-12-1-1-9 3-10 6-11h2l1 1c6 4 16 4 31 1h1l-11 7Z"
                            fill="#FFF" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
