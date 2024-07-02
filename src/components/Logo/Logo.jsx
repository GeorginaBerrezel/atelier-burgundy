import Link from "next/link";
import React from "react";

export default function Logo({darkMode = false}) {
    return (
        <div className="logo">
            <Link href="/">
                {!darkMode && <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                   width="50" height="50" viewBox="0 0 512.000000 512.000000"
                                   preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                       fill="#000000" stroke="none">
                        <path d="M814 4576 c-56 -25 -64 -47 -64 -182 l0 -121 -57 -12 c-115 -23 -204
-96 -244 -201 -18 -48 -19 -91 -19 -913 0 -974 -5 -916 79 -1009 51 -57 104
-87 181 -103 l55 -12 5 -235 c4 -212 7 -238 24 -257 30 -33 78 -45 119 -27 62
26 67 47 67 299 l0 224 73 5 c83 6 142 31 200 87 57 53 73 92 148 356 61 212
72 243 99 268 l31 28 732 -3 732 -3 43 -23 c66 -35 119 -88 149 -150 26 -53
28 -66 31 -210 3 -104 0 -163 -8 -183 -8 -18 -52 -58 -119 -108 -168 -126
-231 -203 -273 -331 -18 -55 -22 -97 -26 -272 l-4 -208 -1157 -2 -1156 -3 -50
-23 c-171 -79 -241 -289 -150 -448 33 -57 103 -118 161 -140 48 -18 108 -19
2149 -19 l2100 0 53 24 c69 31 144 114 168 183 39 115 15 233 -67 322 -66 73
-127 98 -246 104 l-93 4 0 639 0 639 129 0 c121 0 132 2 182 28 39 20 62 41
84 77 l30 48 0 271 c0 258 -1 273 -22 311 -51 95 -99 115 -276 115 l-133 0
-18 76 c-22 92 -79 209 -140 286 -125 158 -356 277 -538 278 l-47 0 -3 184
c-3 179 -4 185 -27 210 -47 50 -140 41 -170 -17 -7 -13 -12 -92 -14 -197 l-2
-175 -1010 -3 c-555 -1 -1025 0 -1044 3 -24 5 -57 28 -112 81 -105 100 -161
126 -291 132 l-98 5 0 114 c0 132 -12 167 -65 189 -41 17 -42 17 -81 0z m3072
-985 c80 -37 134 -87 171 -158 104 -196 32 -418 -165 -515 -60 -30 -75 -33
-157 -33 -80 0 -97 3 -157 32 -84 40 -141 97 -181 181 -29 60 -32 77 -32 157
0 76 5 99 27 147 90 193 307 275 494 189z m-77 -1065 c26 -26 26 -27 29 -219
3 -164 1 -196 -13 -223 -33 -61 -117 -74 -166 -25 l-29 29 0 196 c0 118 4 204
11 219 27 60 118 73 168 23z m-26 -727 c41 -19 57 -59 57 -144 0 -92 -17 -131
-67 -151 -43 -19 -93 -5 -123 33 -17 22 -20 41 -20 120 0 91 1 96 29 124 32
31 79 38 124 18z"/>
                        <path d="M3649 3387 c-49 -32 -83 -105 -74 -159 10 -60 73 -123 133 -133 55
-9 127 25 160 75 30 45 28 130 -6 177 -45 63 -149 83 -213 40z"/>
                    </g>
                </svg>}
            </Link>
        </div>
    )
}