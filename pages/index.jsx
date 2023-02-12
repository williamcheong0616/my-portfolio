/* eslint-disable jsx-a11y/alt-text */
import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import Image from 'next/image';
import deved from '../public/dev-ed-wave.png'
import tech_experience from '../public/tech_experience.png'
import {TbBrandPython} from 'react-icons/tb'
import {AiFillHtml5} from 'react-icons/ai'
import {TbBrandJavascript} from 'react-icons/tb'
import code from '../public/code.png'
import consulting from '../public/consulting.png'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Wiliam Cheong Portfolio</title>
        <meta name="description" content="Yeet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='px-10 bg-white '>
        <section className="min-h-screen">
          <nav className='flex justify-between py-10 mb-12'>
        <h1 className='text-xl font-Burtons' >William Cheong</h1>
        <ul className='flex items-center'>
          <li><BsFillMoonStarsFill className='text-2xl cursor-pointer'/></li>
          <li><a className='px-4 py-2 ml-8 border-collapse rounded-md ext-white bg-gradient-to-r from-gray-400 to-teal-100' href="#">Resume</a></li>
        </ul>
        </nav>

        <div className='p-10 py-10 text-center shadow-lg rounded-xl'>
          <h2 className='py-2 text-5xl font-medium text-teal-600 '>William Cheong</h2>
          <h3 className='py-2 text-2xl'>Developer and Student.</h3> <br></br>
          <p className='py-5 leading-8 text-gray-700 text-md'>Hi, I&apos;m William Cheong, a 22 year old developer and student from Malaysia. 
            I&apos;m currently studying at TARUMT, a university in Malaysia. I&apos;m a self taught developer and I&apos;m currently learning ReactJS and NextJS. I&apos;m also learning Python and C, PHP, MYSQL, MongoDB, I&apos;m Interested in AI (Artificial Intellegence) and also Web Development too.</p> <br></br>
            <p className='py-5 leading-8 text-gray-700 text-md'>Currently a student looking for oppourturnity to contribute and learn more in the tech space, please hit me up if your company is looking for a intern!</p>
            

          <div className='flex gap-16 p-10 py-3 text-5xl text-gray-600 justify-cetner'>
            <a href='https://www.linkedin.com/in/william-cheong-weng-luen-090335243/'><AiFillLinkedin/></a>
            <a href='https://github.com/williamcheong0616'><AiFillGithub/></a>
          </div>
        <div className='relative p-10 mx-auto mt-20 overflow-hidden border-collapse shadow-lg bg-gradient-to-b from-teal-400 w-80 h-80 rounded-xl'>
          <Image src={deved} fill style="cover"/>
        </div>
        </div>
        </section>

        <section>
          <div className='shadow-lg rounded-xl'>
          <div className='p-10'>
            <br/>
            <h3 className='p-10 py-1 text-3xl text-center' >Services I offer</h3>
            <p className='p-10 leading-8 text-center text-gray-800 text-md'>Since the beginning of my University life, I&apos;ve learned several languages and involved in several assignment-projects</p>
            <p className='p-10 leading-8 text-center text-gray-800 text-md'>I offer wide range of services, including Junior Web Development, Entry level functional programming and more. </p>
          </div>
          <div>
            <div className='p-10 shadow-lg rounded-xl'>
              <Image className='pt-10 mx-auto' src={tech_experience} width={150} height={200} />
              <h3 className='text-3xl text-center text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-cyan-400'>My Tech Experience</h3>
              <p className='py-2 leading-8 text-center text-gray-800 text-md'>Level by scale from <strong>1 - 10</strong></p>
              <table className='mx-auto table-auto'>
              <thead>
                <tr className=''>
                  <th className='px-4 py-2 text-center border border-collapse border-gray-400 border-solid rounded-l-lg'>Languages</th>
                  <th className='px-4 py-2 text-center border border-collapse border-gray-400 border-solid rounded'>Level</th>
                  </tr>
              </thead>
              <tbody>
                <tr>
                <th className='flex px-4 py-2 text-center border border-collapse border-gray-400 border-solid'><TbBrandPython className='align-middle'/>Python</th>
                <th  className='px-4 py-2 text-center border border-collapse border-gray-400 border-solid'>8</th>
                </tr>
                <tr>
                <th  className='flex px-4 py-2 text-center border border-collapse border-gray-400 border-solid'><AiFillHtml5 className='align-middle'/>HTML</th>
                <th  className='px-4 py-2 text-center border border-collapse border-gray-400 border-solid'>8</th>
                </tr>
                <tr>
                <th  className='flex px-4 py-2 text-center border border-collapse border-gray-400 border-solid'><TbBrandJavascript className='align-middle'/>Javascript</th>
                <th  className='px-4 py-2 text-center border border-collapse border-gray-400 border-solid'>6</th>
                </tr>
              </tbody>
              </table>
            </div>
          </div>
          </div>
          <section>
          <div className='p-10 shadow-lg rounded-xl'>
              <Image className='pt-10 mx-auto' src={code} width={150} height={200} />
              <h3 className='text-3xl text-center text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-cyan-400'>Educations</h3>

              <div class="py-10 container mx-auto px-5">
            <div class="relative mx-auto">
                <div class="border-r-4 border-black absolute h-full top-0" style={{ 'left': '9px' }}></div>
                <ul class="list-none m-0 p-0">
                    <li class="mb-5 mx-auto ">
                        <div class="flex group items-center ">
                            <div class="bg-gray-800 group-hover:bg-red-700 z-10 rounded-full border-4 border-black  h-5 w-5">
                                <div class="bg-black h-1 w-6 items-center  ml-4 mt-1"></div>
                            </div>
                            <div class="flex-1 ml-4 z-10 font-medium">
                                <div class="order-1 space-y-2 bg-gray-400 rounded-lg shadow-only transition-ease lg:w-5/12 px-6 py-4">
                                    <h3 class="mb-3 font-bold text-white text-2xl">University</h3>
                                    <p class="pb-4 text-sm text-white">Tunku Abdul Rahman University of Management and Technology (TAR UMT) <br/> (2022 - Present)</p>
                                    <hr />
                                    <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Major in Diploma in Information Techonlogy</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="mb-5  ">
                        <div class="flex group items-center ">
                            <div class="bg-gray-800 group-hover:bg-red-700 z-10 rounded-full border-4 border-black  h-5 w-5">
                                <div class="bg-black h-1 w-6 items-center  ml-4 mt-1"></div>
                            </div>
                            <div class="flex-1 ml-4 z-10 font-medium">
                                <div class="order-1 space-y-2 bg-gray-800 rounded-lg shadow-only transition-ease lg:w-5/12 px-6 py-4">
                                    <h3 class="mb-3 font-bold text-white text-2xl">Secondary School</h3>
                                    <p class="pb-4 text-sm text-gray-100">Sekolah Jenis Kebangsaan Ideal Heights (2014 - 2018)</p>
                                    <hr />
                                    <p class="text-sm font-medium leading-snug tracking-wide text-gray-300 text-opacity-100">Majored In Business studies (Accounting, Economics, Business Developement) <br/> Sub-Majored In Computer Science</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

                </div>
              
              </section>
          </section>  
      
      </main>

    </div>
  );
}
