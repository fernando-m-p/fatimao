type IconProps = React.HTMLAttributes<SVGElement>

export const Icons = {
  logo: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <rect width="256" height="256" fill="none" />
      <line
        x1="208"
        y1="128"
        x2="128"
        y2="208"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <line
        x1="192"
        y1="40"
        x2="40"
        y2="192"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </svg>
  ),
  google: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
      />
    </svg>
  ),
  spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >

      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),

  card: (fill: "red" | "yellow" | "blue", props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
    >
      <rect
        x="40"
        y="20"
        width="88"
        height="140"
        rx="8"
        fill={fill || "red"}
        stroke="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        {...props}
      />

    </svg>
  ),
  card2: (fill: "red" | "yellow" | "blue", props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 180"
    >
      <rect
        x="20"
        y="20"
        width="80"
        height="140"
        rx="8"
        fill={fill || "red"}
        stroke="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        {...props}
      />

    </svg>
  ),

  x: (pops: IconProps) => {
    return (

      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd">
        </path>
      </svg>
    )
  },
  ball: (props: IconProps, size:"xs"|"m"|"l") => {
    let height, width 
    switch(size){
      case "xs": height = width = 5;
      case "m": height = width = 10;
      case "l": height = width = 20;
    }
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        height={height}
        width={width}
      >
        <defs>
          <filter id="shadow-2" height="300%" width="300%" x="-100%" y="-100%">
            <feFlood flood-color="rgba(0, 0, 0, 1)" result="flood"></feFlood>
            <feComposite in="flood" in2="SourceGraphic" operator="atop" result="composite"></feComposite>
            <feGaussianBlur in="composite" stdDeviation="6" result="blur">
            </feGaussianBlur><feOffset dx="5" dy="5" result="offset"></feOffset>
            <feComposite in="SourceGraphic" in2="offset" operator="over">
            </feComposite>
          </filter>
          <filter id="shadow-3" height="300%" width="300%" x="-100%" y="-100%">
            <feFlood flood-color="rgba(0, 0, 0, 1)" result="flood"></feFlood>
            <feComposite in="flood" in2="SourceGraphic" operator="atop" result="composite"></feComposite>
            <feGaussianBlur in="composite" stdDeviation="6" result="blur"></feGaussianBlur>
            <feOffset dx="5" dy="5" result="offset"></feOffset>
            <feComposite in="SourceGraphic" in2="offset" operator="over"></feComposite>
          </filter>
          <filter id="shadow-4" height="300%" width="300%" x="-100%" y="-100%">
            <feFlood flood-color="rgba(0, 0, 0, 1)" result="flood"></feFlood>
            <feComposite in="flood" in2="SourceGraphic" operator="atop" result="composite"></feComposite>
            <feGaussianBlur in="composite" stdDeviation="6" result="blur"></feGaussianBlur>
            <feOffset dx="5" dy="5" result="offset"></feOffset>
            <feComposite in="SourceGraphic" in2="offset" operator="over"></feComposite>
          </filter>
          <filter id="shadow-5" height="300%" width="300%" x="-100%" y="-100%">
            <feFlood flood-color="rgba(0, 0, 0, 1)" result="flood"></feFlood>
            <feComposite in="flood" in2="SourceGraphic" operator="atop" result="composite"></feComposite>
            <feGaussianBlur in="composite" stdDeviation="6" result="blur"></feGaussianBlur>
            <feOffset dx="5" dy="5" result="offset"></feOffset>
            <feComposite in="SourceGraphic" in2="offset" operator="over"></feComposite>
          </filter>
          <filter id="shadow-6" height="300%" width="300%" x="-100%" y="-100%">
            <feFlood flood-color="rgba(0, 0, 0, 1)" result="flood"></feFlood>
            <feComposite in="flood" in2="SourceGraphic" operator="atop" result="composite"></feComposite>
            <feGaussianBlur in="composite" stdDeviation="6" result="blur"></feGaussianBlur>
            <feOffset dx="5" dy="5" result="offset"></feOffset>
            <feComposite in="SourceGraphic" in2="offset" operator="over"></feComposite>
          </filter>
          <filter id="shadow-7" height="300%" width="300%" x="-100%" y="-100%">
            <feFlood flood-color="rgba(0, 0, 0, 1)" result="flood"></feFlood>
            <feComposite in="flood" in2="SourceGraphic" operator="atop" result="composite"></feComposite>
            <feGaussianBlur in="composite" stdDeviation="6" result="blur"></feGaussianBlur>
            <feOffset dx="5" dy="5" result="offset"></feOffset>
            <feComposite in="SourceGraphic" in2="offset" operator="over"></feComposite>
          </filter>
          <filter id="shadow-8" height="300%" width="300%" x="-100%" y="-100%">
            <feFlood flood-color="rgba(0, 0, 0, 1)" result="flood"></feFlood>
            <feComposite in="flood" in2="SourceGraphic" operator="atop" result="composite"></feComposite>
            <feGaussianBlur in="composite" stdDeviation="6" result="blur"></feGaussianBlur>
            <feOffset dx="5" dy="5" result="offset"></feOffset>
            <feComposite in="SourceGraphic" in2="offset" operator="over"></feComposite>
          </filter>
          <filter id="shadow-9" height="300%" width="300%" x="-100%" y="-100%">
            <feFlood flood-color="rgba(0, 0, 0, 1)" result="flood"></feFlood>
            <feComposite in="flood" in2="SourceGraphic" operator="atop" result="composite"></feComposite>
            <feGaussianBlur in="composite" stdDeviation="6" result="blur"></feGaussianBlur>
            <feOffset dx="5" dy="5" result="offset"></feOffset>
            <feComposite in="SourceGraphic" in2="offset" operator="over"></feComposite>
          </filter>
          <filter id="shadow-10" height="300%" width="300%" x="-100%" y="-100%">
            <feFlood flood-color="rgba(0, 0, 0, 1)" result="flood"></feFlood>
            <feComposite in="flood" in2="SourceGraphic" operator="atop" result="composite"></feComposite>
            <feGaussianBlur in="composite" stdDeviation="6" result="blur"></feGaussianBlur>
            <feOffset dx="5" dy="5" result="offset"></feOffset>
            <feComposite in="SourceGraphic" in2="offset" operator="over"></feComposite>
          </filter>
          <filter id="shadow-11" height="300%" width="300%" x="-100%" y="-100%">
            <feFlood flood-color="rgba(0, 0, 0, 1)" result="flood"></feFlood>
            <feComposite in="flood" in2="SourceGraphic" operator="atop" result="composite"></feComposite>
            <feGaussianBlur in="composite" stdDeviation="6" result="blur"></feGaussianBlur>
            <feOffset dx="5" dy="5" result="offset"></feOffset>
            <feComposite in="SourceGraphic" in2="offset" operator="over"></feComposite>
          </filter>
        </defs>
        <circle cx="256" cy="256" r="241" fill="#000000" fill-opacity="1" stroke="#fff" stroke-opacity="1" stroke-width="15"></circle>
        <g transform="translate(0,0)" >
          <path
            d="M255.03 33.813c-1.834-.007-3.664-.007-5.5.03-6.73.14-13.462.605-20.155 1.344.333.166.544.32.47.438L204.78 75.063l73.907 49.437-.125.188 70.625.28L371 79.282 342.844 52c-15.866-6.796-32.493-11.776-49.47-14.78-12.65-2.24-25.497-3.36-38.343-3.407zM190.907 88.25l-73.656 36.78-13.813 98.407 51.344 33.657 94.345-43.438 14.875-76.5-73.094-48.906zm196.344.344l-21.25 44.5 36.75 72.72 62.063 38.905 11.312-21.282c.225.143.45.403.656.75-.77-4.954-1.71-9.893-2.81-14.782-6.446-28.59-18.59-55.962-35.5-79.97-9.07-12.872-19.526-24.778-31.095-35.5l-20.125-5.342zm-302.656 23c-6.906 8.045-13.257 16.56-18.938 25.5-15.676 24.664-26.44 52.494-31.437 81.312C31.783 232.446 30.714 246.73 31 261l20.25 5.094 33.03-40.5L98.75 122.53l-14.156-10.936zm312.719 112.844l-55.813 44.75-3.47 101.093 39.626 21.126 77.188-49.594 4.406-78.75-.094.157-61.844-38.783zm-140.844 6.406l-94.033 43.312-1.218 76.625 89.155 57.376 68.938-36.437 3.437-101.75-66.28-39.126zm-224.22 49.75c.91 8.436 2.29 16.816 4.156 25.094 6.445 28.59 18.62 55.96 35.532 79.968 3.873 5.5 8.02 10.805 12.374 15.938l-9.374-48.156.124-.032-27.03-68.844-15.782-3.968zm117.188 84.844l-51.532 8.156 10.125 52.094c8.577 7.49 17.707 14.332 27.314 20.437 14.612 9.287 30.332 16.88 46.687 22.594l62.626-13.69-4.344-31.124-90.875-58.47zm302.437.5l-64.22 41.25-42 47.375 4.408 6.156c12.027-5.545 23.57-12.144 34.406-19.72 23.97-16.76 44.604-38.304 60.28-62.97 2.51-3.947 4.87-7.99 7.125-12.092zm-122.78 97.656l-79.94 9.625-25.968 5.655c26.993 4 54.717 3.044 81.313-2.813 9.412-2.072 18.684-4.79 27.75-8.062l-3.156-4.406z"
            fill="#16a34a"
            fillOpacity="1"
            stroke="#000000"
            strokeOpacity="1"
            strokeWidth="8"
            transform="translate(0, 512) scale(1, -1) rotate(-165, 256, 256) skewX(0) skewY(0)"
          >
          </path>
        </g>
      </svg>
    )
  }
}