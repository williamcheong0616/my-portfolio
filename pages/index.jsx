import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import Image from 'next/image';
import deved from '../public/dev-ed-wave.png'
import tech_experience from '../public/tech_experience.png'
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
          <li><a className='px-4 py-2 ml-8 rounded-md ext-white bg-gradient-to-r from-cyan-500 to-teal-100' href="#">Resume</a></li>
        </ul>
        </nav>

        <div className='p-10 py-10 text-center'>
          <h2 className='py-2 text-5xl font-medium text-teal-600 '>William Cheong</h2>
          <h3 className='py-2 text-2xl'>Developer and Student.</h3> <br></br>
          <p className='py-5 leading-8 text-gray-700 text-md'>Hi, I&apos;m William Cheong, a 22 year old developer and student from Malaysia. 
            I&apos;m currently studying at TARUMT, a university in Malaysia. I&apos;m a self taught developer and I&apos;m currently learning ReactJS and NextJS. I&apos;m also learning Python and C, PHP, MYSQL, MongoDB, I&apos;m Interested in AI (Artificial Intellegence) and also Web Development too.</p> <br></br>
            <p className='py-5 leading-8 text-gray-700 text-md'>Currently a student looking for oppourturnity to contribute and learn more in the tech space, please hit me up if your company is looking for a intern!</p>
            
        </div>
          <div className='flex gap-16 py-3 text-5xl text-gray-600 justify-cetner'>
            <a href='https://www.linkedin.com/in/william-cheong-weng-luen-090335243/'><AiFillLinkedin/></a>
            <a href='https://github.com/williamcheong0616'><AiFillGithub/></a>
          </div>
        <div className='relative mx-auto mt-20 overflow-hidden rounded-full bg-gradient-to-b from-teal-500 w-80 h-80'>
          <Image src={deved} fill style="cover"/>
        </div>
        
        </section>

        <section>
          <div>
            <br/>
            <h3 className='py-1 text-3xl'>Services I offer</h3>
            <p className='py-2 leading-8 text-gray-800 text-md'>Since the begining of my University life, I&apos;ve learned several languages and involved in several assignment-projects</p>
            <p className='py-2 leading-8 text-gray-800 text-md'>I offer wide range of services, including Junior Web Development, Entry level functional programming and more. </p>
          </div>
          <div>
            <div>
              <Image className='mx-auto' src={tech_experience} width={100} height={100} />
              <h3 className='text-center'>My Tech Experience</h3>
            </div>
          </div>
          </section>  
      
      </main>

    </div>
  );
}
