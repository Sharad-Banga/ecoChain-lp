
export default function Footer(){

  return(
    <>
        <div className="h-[17vh] sm:h-[32vh] w-full bg-[url('/images/footer.png')] bg-cover flex items-center">

            



            <div className="w-[30%] h-full text-[8px] sm:text-[14px] flex flex-col justify-center items-center ">
                  <div className="cursor-pointer select-none flex justify-between  sm:flex-row w-[60%]  ">
                  {/* <span className="font-semibold mb-8">IMPORTANT</span>

                    <div className="opacity-70 hover:opacity-100">HELP</div>
                    <div className="opacity-70 hover:opacity-100">ABOUT</div>
                    <div className="opacity-70 hover:opacity-100">FEATURES</div> */}

                    © 2025 The EcoChain / Privacy Policy
                  </div>
            </div>





                <div className=" h-full w-[40%] flex flex-col justify-center  items-center">
              <div className="font-geistsans font-bold text-[13px] sm:text-[16px] md:text-[32px]">
            🌱   Eco<span className="text-[#00AA14]">Chain</span>
              </div>
              <div className="font-poppins text-[8px] sm:text-[18px] text-[#024c0b] font-semibold">
                Reduce, Reuse, Recycle
              </div>
            </div>





            


            <div className="font-poppins w-[30%] text-[10px] flex flex-col justify-center items-center sm:text-[16px] sm:mb-2">
              <div>Follow Us on:</div>

              <div className="flex  w-[50%] sm:w-[26%] justify-between items-center ">
                <div>
                  <a className="footer-link" href="https://x.com/sharad_banga" target="_blank" rel="noopener noreferrer"> 
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="12" height="12" viewBox="0 0 50 50"
                        className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
                        >
                        <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
                        </svg>
                  </a>
                </div>

                

                <div>
                  <a className="footer-link" href="https://github.com/Sharad-Banga" target="_blank" rel="noopener noreferrer"> 
                  
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="12" height="12" viewBox="0 0 30 30"
                      className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8">
                        <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                    </svg>
                  </a>
                </div>

                <div>
                  <a className="footer-link" href="https://www.linkedin.com/in/sharad-banga-37a83a248/" target="_blank" rel="noopener noreferrer"> 
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="12" height="12" viewBox="0 0 48 48"
                        className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8">
                        <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                        </svg>
                  </a>
                </div>

              </div>
            </div>

        </div>



        <div className="border-t-2 border-white/90 h-6 font-poppins w-full text-[10px] flex justify-center items-center sm:h-8 sm:text-[14px] bg-[#CAFFD1]">
            Developed and Designed By &nbsp;  <span className="font-semibold hover:text-green-600 cursor-pointer">
              
              
            <a className="footer-link" href="https://x.com/sharad_banga" target="_blank" rel="noopener noreferrer"> Sharad Banga</a>
              
              </span>
        </div>
    </>
  )
}


