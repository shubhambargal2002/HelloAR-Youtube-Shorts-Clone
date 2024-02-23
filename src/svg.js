const ShareSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="30"
      height="30"
      viewBox="0,0,256,256"
      style={{ fill: "#000000" }}
    >
      <g
        fill="#ffffff"
        fill-rule="nonzero"
        stroke="none"
        stroke-width="1"
        stroke-linecap="butt"
        stroke-linejoin="miter"
        stroke-miterlimit="10"
        stroke-dasharray=""
        stroke-dashoffset="0"
        font-family="none"
        font-weight="none"
        font-size="none"
        text-anchor="none"
        style={{ mixBlendMode: "normal", cursor:"pointer" }}
      >
        <g transform="scale(10.66667,10.66667)">
          <path d="M18,2c-1.65685,0 -3,1.34315 -3,3c0.00061,0.18815 0.01892,0.37583 0.05469,0.56055l-7.11523,4.15039c-0.54194,-0.45909 -1.22919,-0.71102 -1.93945,-0.71094c-1.65685,0 -3,1.34315 -3,3c0,1.65685 1.34315,3 3,3c0.70916,-0.00139 1.3949,-0.25396 1.93555,-0.71289l7.11914,4.15234c-0.03577,0.18472 -0.05408,0.3724 -0.05469,0.56055c0,1.65685 1.34315,3 3,3c1.65685,0 3,-1.34315 3,-3c0,-1.65685 -1.34315,-3 -3,-3c-0.70983,0.00093 -1.39634,0.25353 -1.9375,0.71289l-7.11719,-4.15234c0.03577,-0.18472 0.05408,-0.3724 0.05469,-0.56055c-0.00061,-0.18815 -0.01892,-0.37583 -0.05469,-0.56055l7.11523,-4.15039c0.54194,0.45909 1.22919,0.71102 1.93945,0.71094c1.65685,0 3,-1.34315 3,-3c0,-1.65685 -1.34315,-3 -3,-3z"></path>
        </g>
      </g>
    </svg>
  );
};

const CommentSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      width="30px"
      height="30px"
      viewBox="0 0 111.686 122.879"
      enable-background="new 0 0 111.686 122.879"
      fill="#ffffff"
      style={{cursor:"pointer"}}
    >
      <g>
        <path d="M83.896,5.08H27.789c-12.491,0-22.709,10.219-22.709,22.71v40.079c0,12.489,10.22,22.71,22.709,22.71h17.643 c-2.524,9.986-5.581,18.959-14.92,27.241c17.857-4.567,31.642-13.8,41.759-27.241h3.051c12.488,0,31.285-10.219,31.285-22.71V27.79 C106.605,15.299,96.387,5.08,83.896,5.08L83.896,5.08z M81.129,41.069c-4.551,0-8.24,3.691-8.24,8.242s3.689,8.242,8.24,8.242 c4.553,0,8.242-3.691,8.242-8.242S85.682,41.069,81.129,41.069L81.129,41.069z M30.556,41.069c-4.552,0-8.242,3.691-8.242,8.242 s3.69,8.242,8.242,8.242c4.551,0,8.242-3.691,8.242-8.242S35.107,41.069,30.556,41.069L30.556,41.069z M55.843,41.069 c-4.551,0-8.242,3.691-8.242,8.242s3.691,8.242,8.242,8.242c4.552,0,8.241-3.691,8.241-8.242S60.395,41.069,55.843,41.069 L55.843,41.069z M27.789,0h56.108h0.006v0.02c7.658,0.002,14.604,3.119,19.623,8.139l-0.01,0.01 c5.027,5.033,8.148,11.977,8.15,19.618h0.02v0.003h-0.02v40.079h0.02v0.004h-0.02c-0.004,8.17-5.68,15.289-13.24,20.261 c-7.041,4.629-15.932,7.504-23.104,7.505v0.021H75.32v-0.021h-0.576c-5.064,6.309-10.941,11.694-17.674,16.115 c-7.443,4.888-15.864,8.571-25.31,10.987l-0.004-0.016c-1.778,0.45-3.737-0.085-5.036-1.552c-1.852-2.093-1.656-5.292,0.437-7.144 c4.118-3.651,6.849-7.451,8.826-11.434c1.101-2.219,1.986-4.534,2.755-6.938h-10.95h-0.007v-0.021 c-7.656-0.002-14.602-3.119-19.622-8.139C3.138,82.478,0.021,75.53,0.02,67.871H0v-0.003h0.02V27.79H0v-0.007h0.02 C0.021,20.282,3.023,13.46,7.878,8.464C7.967,8.36,8.059,8.258,8.157,8.16c5.021-5.021,11.968-8.14,19.628-8.141V0H27.789L27.789,0 z" />
      </g>
    </svg>
  );
};

const LikeSvg = ({liked, onClick}) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 122.88 107.41"
      fill="#ffffff"
      style={{enableBackground:"new 0 0 122.88 107.41", cursor:"pointer", fill: liked ? "red" : "white"}}
      onClick={onClick}
    >
      <style type="text/css"></style>
      <g>
        <path
          class="st0"
          d="M60.83,17.19C68.84,8.84,74.45,1.62,86.79,0.21c23.17-2.66,44.48,21.06,32.78,44.41 c-3.33,6.65-10.11,14.56-17.61,22.32c-8.23,8.52-17.34,16.87-23.72,23.2l-17.4,17.26L46.46,93.56C29.16,76.9,0.95,55.93,0.02,29.95 C-0.63,11.75,13.73,0.09,30.25,0.3C45.01,0.5,51.22,7.84,60.83,17.19L60.83,17.19L60.83,17.19z"
        />
      </g>
    </svg>
  );
};

export { ShareSvg, CommentSvg, LikeSvg };