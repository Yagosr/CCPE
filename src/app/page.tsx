import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center mt-24 ">

      <video  className="fixed opacity-60 h-full w-full mb-12 mr-72" autoPlay loop muted>
        <source className="w-full h-full" src="./video/ccpeGif.mp4" type="video/mp4"/>
      </video>

    <div className="  z-10 w-74 h-full bg-inherit ">
        <div className="flex gap-10 ">
            <div> 
              <img src="./img/PalavraViva.png" alt="Logo Teatro" width={200} height={200} />
            </div>
            <div> 
              <img src="./img/Dunamai.png" alt="Logo Teatro" width={200} height={200} />
            </div>
            <div> 
              <img src="./img/Teens.png" alt="Logo Teatro" width={200} height={200} />
            </div>
        </div>
        <div>
          <div className=" flex flex-col items-center justify-center text-2xl p-5">
              <h1>Venha participar do nosso culto</h1>
              <h1>Você é nosso convidado</h1> 
              <h1>especial</h1>
          </div>
        </div>
        
        <div>
          <div className=" flex justify-center p-3 gap-12 ">
              <div>
                <div className="flex flex-col">
                  <span className="ml-1"> Carta convite</span>
                  <span className="ml-2">Clique aqui</span>
                </div>
                  <div className="flex justify-center items-center cursor-pointer">
                      <Link href={'http://localhost:3000/page/invite'}>
                        <div className="flex justify-center items-center text-secondary-100 hover:text-primary-200 cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                        </div>
                      </Link>
                  </div>
              </div>
                <div>
                  <div className="flex flex-col items-center justify-center">
                  <span >Como chegar?</span>
                  <span >Clique aqui</span>
                  </div>
                  <a href="https://www.google.com.br/maps/place/R.+Virg%C3%ADlio+Martins+de+Oliveira,+156+-+Centro,+Francisco+Morato+-+SP,+07901-020/@-23.2806389,-46.7446286,19z/data=!3m1!4b1!4m6!3m5!1s0x94cee72a76c48ff3:0x83d80f443a7244ef!8m2!3d-23.2806389!4d-46.7446286!16s%2Fg%2F11bw4n5sbl?entry=ttu">  
                    <div className="flex justify-center items-center text-secondary-100 hover:text-primary-200 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="ml-1"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                  </a>
                </div>
            </div>

              <div className=" flex align-center justify-around p-10 cursor-pointer">
              <a href="https://www.youtube.com/@ccpeoficial3617/streams">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-secondary-100 hover:text-primary-200"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                  </div>
              </a>
              <a href="https://www.facebook.com/comu.ccpe.3">
                  <div>
                     <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-secondary-100 hover:text-primary-200"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </div>
              </a>
              <a href="https://www.instagram.com/comuccpe/">
                  <div>
                     <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-secondary-100 hover:text-primary-200"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </div>
              </a>
              </div>
          </div>
      </div>
    </main>
  )
}
