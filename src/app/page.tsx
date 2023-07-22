export default function Home() {
  return (
    <main className="  p-20 flex justify-center ">
    <div className="border-black border w-72 h-96 bg-primary-50 ">
        <div>
          <div className=" flex align-center justify-center">
            <img src="./img/logoccpe.jpeg" alt="logo" width="150" height="150"/>
          </div>

          <div className=" flex align-center justify-center text-xl">
              <h1>Você é nosso convidado</h1> 
          </div>
        </div>
        
        <div>
          <div className=" flex justify-center gap-12 p-5">
              <div>
                  <span>Carta convite</span>
                  <div className="flex justify-center items-center  text-secondary-100 hover:text-animation-100 cursor-pointer">
                      <a href="">
                        <div className="flex justify-center items-center text-secondary-100 hover:text-animation-100 cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                        </div>
                      </a>
                  </div>
              </div>
                <div>
                  <span>Como chegar?</span>
                  <a href="https://www.google.com.br/maps/place/R.+Virg%C3%ADlio+Martins+de+Oliveira,+156+-+Centro,+Francisco+Morato+-+SP,+07901-020/@-23.2806389,-46.7446286,19z/data=!3m1!4b1!4m6!3m5!1s0x94cee72a76c48ff3:0x83d80f443a7244ef!8m2!3d-23.2806389!4d-46.7446286!16s%2Fg%2F11bw4n5sbl?entry=ttu">  
                    <div className="flex justify-center items-center text-secondary-100 hover:text-animation-100 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                  </a>
                  
                  
                </div>
            </div>
              <div className=" flex align-center justify-center">
                  <div><img src="./img/LogoJPAC.jpeg" alt="jpac" width="120" height="120" /></div>
                  <div><img src="./img/PalavraViva.jpeg" alt="palavraviva"  width="120" height="120" /></div>
                  <div><img src="./img/dunamai.jpeg" alt="dunamai" width="120" height="120" /></div>
              </div>

            </div>
        </div>
    </main>
  )
}
