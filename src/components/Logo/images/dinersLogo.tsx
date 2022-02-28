import React from 'react';
import type { Size } from '../types';

export const getDinersLogo = (size: Size) => {
    return size === 'regular' ? dinersLogoRegular() : dinersLogoSmall();
};

const dinersLogoRegular = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="23"
            viewBox="0 0 34 23"
            fill="none"
        >
            <circle cx="11.2087" cy="11.2088" r="10.8352" fill="white" />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M33.6216 8.30363C33.2451 6.89234 32.5895 5.5563 31.7007 4.40561C30.8117 3.25472 29.6891 2.28939 28.5179 1.57482C27.3467 0.860259 26.1267 0.396868 25.249 0.157996C24.3716 -0.080876 23.8495 0.0220542 23.3217 0.0220542H10.6789C10.3354 0.0220542 9.99342 0.0222593 9.11524 0.241242C8.23706 0.460225 6.82433 0.865795 5.56025 1.56006C4.29637 2.25433 3.18134 3.23709 2.29602 4.39659C1.40869 5.56047 0.757244 6.8878 0.378558 8.30343C0.00169206 9.71956 -0.095008 11.1962 0.0939301 12.6497C0.284795 14.103 0.758059 15.5045 1.48685 16.7747C2.21434 18.04 3.19298 19.1597 4.35211 20.0266C5.51125 20.8935 6.85067 21.5078 7.93426 21.889C9.01784 22.27 9.84559 22.4176 10.6784 22.4176H23.3211C24.1537 22.4176 24.9817 22.27 26.0651 21.889C27.1487 21.5078 28.4881 20.8937 29.6474 20.0266C30.8063 19.1595 31.785 18.04 32.5127 16.7747C33.2415 15.5045 33.7147 14.103 33.9056 12.6497C34.0951 11.1963 33.9986 9.71967 33.6216 8.30363ZM21.3273 13.9406C20.9671 15.2871 20.3475 16.5496 19.5035 17.6567C18.658 18.7628 17.6043 19.6913 16.4024 20.3895C15.1994 21.0857 13.8718 21.5377 12.4952 21.72C11.1185 21.9005 9.71989 21.8081 8.37855 21.4481C7.03772 21.0864 5.78055 20.4641 4.67819 19.6165C3.5768 18.7675 2.65226 17.7094 1.95708 16.5024C1.26376 15.2943 0.813593 13.9611 0.63215 12.5787C0.451859 11.2006 0.544557 9.78689 0.902893 8.44449C1.26123 7.1021 1.88459 5.83146 2.72663 4.72855C3.57213 3.62247 4.62578 2.69396 5.82773 1.99577C7.03072 1.29957 8.35818 0.847436 9.73472 0.665061C11.1115 0.48457 12.5101 0.57694 13.8514 0.936944C15.1923 1.29869 16.4495 1.92097 17.552 2.76857C18.6503 3.61436 19.5813 4.67913 20.2733 5.88272C20.9653 7.08631 21.4177 8.4285 21.598 9.80658C21.7783 11.1847 21.6854 12.5982 21.3273 13.9406Z"
                fill="#383E93"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.95427 7.32289C6.48248 7.84267 6.11047 8.44558 5.857 9.10121C5.60386 9.75709 5.47371 10.4543 5.47314 11.1578C5.47314 11.859 5.60443 12.5602 5.857 13.2143C6.10957 13.8682 6.48343 14.4747 6.95427 14.9926C7.42511 15.5106 7.99252 15.9395 8.61711 16.2532V6.0623C7.99077 6.37691 7.42718 6.80417 6.95427 7.32289ZM15.2987 7.29316C14.8176 6.77284 14.2446 6.34648 13.6089 6.03564V16.2799C14.2446 15.969 14.8175 15.5426 15.2987 15.0224C15.7788 14.501 16.1577 13.8942 16.416 13.2332C16.6739 12.5718 16.8065 11.868 16.8072 11.1578C16.8072 10.4496 16.6735 9.74175 16.416 9.08234C16.1577 8.4213 15.7788 7.81451 15.2987 7.29316Z"
                fill="#383E93"
            />
        </svg>
    );
};

const dinersLogoSmall = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="18"
            viewBox="0 0 26 18"
            fill="none"
        >
            <ellipse
                cx="8.71954"
                cy="9.15665"
                rx="8.0086"
                ry="8.12637"
                fill="white"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.2856 6.97772C25.0073 5.91925 24.5227 4.91722 23.8657 4.05421C23.2086 3.19104 22.3789 2.46704 21.5133 1.93112C20.6476 1.39519 19.7459 1.04765 19.0971 0.868497C18.4486 0.689343 18.0627 0.766541 17.6726 0.766541H8.32788C8.07404 0.766541 7.82125 0.766694 7.17216 0.930932C6.52307 1.09517 5.47888 1.39935 4.54456 1.92005C3.61039 2.44075 2.78624 3.17781 2.13187 4.04744C1.47602 4.92036 0.994516 5.91585 0.714618 6.97757C0.436065 8.03967 0.364591 9.14712 0.504241 10.2373C0.645315 11.3272 0.995119 12.3784 1.53379 13.331C2.0715 14.28 2.79484 15.1198 3.65159 15.77C4.50834 16.4201 5.49835 16.8809 6.29926 17.1667C7.10018 17.4525 7.71199 17.5632 8.32758 17.5632H17.6721C18.2876 17.5632 18.8995 17.4525 19.7003 17.1667C20.5012 16.8809 21.4912 16.4203 22.3481 15.77C23.2047 15.1196 23.9281 14.28 24.4659 13.331C25.0046 12.3784 25.3544 11.3272 25.4955 10.2373C25.6356 9.14721 25.5642 8.03976 25.2856 6.97772ZM16.1984 11.2055C15.9322 12.2153 15.4743 13.1622 14.8505 13.9926C14.2255 14.8221 13.4467 15.5185 12.5584 16.0421C11.6691 16.5643 10.6879 16.9033 9.67043 17.04C8.65284 17.1754 7.61908 17.1061 6.62766 16.8361C5.63661 16.5648 4.70739 16.0981 3.89261 15.4624C3.07854 14.8256 2.39518 14.032 1.88135 13.1268C1.3689 12.2207 1.03617 11.2208 0.902056 10.184C0.768797 9.15049 0.837313 8.09017 1.10217 7.08337C1.36703 6.07657 1.82777 5.1236 2.45015 4.29641C3.07509 3.46685 3.85387 2.77047 4.74226 2.24683C5.63143 1.72467 6.6126 1.38558 7.63004 1.2488C8.64763 1.11343 9.68139 1.18271 10.6728 1.45271C11.6639 1.72402 12.5932 2.19073 13.408 2.82643C14.2198 3.46077 14.908 4.25935 15.4194 5.16204C15.9309 6.06473 16.2653 7.07138 16.3986 8.10493C16.5318 9.13849 16.4632 10.1987 16.1984 11.2055Z"
                fill="#383E93"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.57497 6.24217C5.22625 6.632 4.95129 7.08418 4.76395 7.5759C4.57684 8.06782 4.48064 8.59075 4.48022 9.11832C4.48022 9.64425 4.57726 10.1702 4.76395 10.6607C4.95063 11.1511 5.22696 11.606 5.57497 11.9945C5.92298 12.3829 6.34238 12.7046 6.80403 12.9399V5.29673C6.34108 5.53269 5.92451 5.85313 5.57497 6.24217ZM11.7426 6.21987C11.387 5.82963 10.9635 5.50986 10.4936 5.27673V12.9599C10.9635 12.7267 11.3869 12.407 11.7426 12.0168C12.0974 11.6258 12.3775 11.1707 12.5684 10.6749C12.759 10.1789 12.8571 9.65099 12.8576 9.11832C12.8576 8.58716 12.7587 8.05631 12.5684 7.56176C12.3775 7.06598 12.0974 6.61088 11.7426 6.21987Z"
                fill="#383E93"
            />
        </svg>
    );
};