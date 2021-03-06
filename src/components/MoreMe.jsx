/* eslint-disable getter-return */
import React from 'react'
import FrontItem from './FrontItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import ScrollDown from './ScrollDown';

function MoreMe() {

  return (
    <div className='mt-16 xl:mt-0 flex flex-col justify-center items-center bg-secondary'>
      <div id='front' className='scroll flex flex-col lg:flex-row xl:flex-row justify-center items-center w-full xl:h-screen'>
        <div className='flex w-2/4 justify-center items-center margincenter'>
          <img src="https://www.mynerdlifebr.com.br/wp-content/uploads/2020/08/2020-08-26-back-front-end-2.png" alt='teaching' className='w-3/5' />
        </div>
        <div className='flex-col w-2/4 margincenter'>
          <div className='flex justify-center mx-auto w-2/4'>
            <h1 data-aos="fade-left" data-aos-delay="500"
              className='text-6xl text-primary border-b-2 border-quinary text-center fonte'>Front End</h1>
          </div>
          <div className='flex flex-col justify-center sm:w-2/4 xl:w-1/3 items-center mx-auto mt-2'>
            <FrontItem img="https://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Other-html-5-icon.png" text="HTML" />
            <FrontItem img="https://terminalroot.com.br/assets/img/css/css.png" text="CSS" />
            <FrontItem img="https://bognarjunior.files.wordpress.com/2018/01/1crcyaithv7aiqh1z93v99q.png" text="JavaScript" />
            <FrontItem img="https://bognarjunior.files.wordpress.com/2018/03/if_react-js_logo_1174949.png" text="React.JS" />
            <FrontItem img="https://cdn.iconscout.com/icon/free/png-256/redux-3772327-3151453.png" text="Redux" />
            <FrontItem img="https://testing-library.com/img/octopus-128x128.png" text="TDD - RTL" />
          </div>
          <div>
            <div className='mt-4 flex flex-col justify-center mx-auto'>
              <div className='flex items-center justify-center gap-2 mt-4 text-center'>
                <FontAwesomeIcon icon={faQuestionCircle} />
                <p className='fonte'>Experi??ncia trabalhando com frameworks.</p>
              </div>
              <div className='flex items-center justify-center gap-2 mt-4 text-center'>
                <FontAwesomeIcon icon={faQuestionCircle} />
                <p className='fonte'>Experi??ncia realizando deploy de front-end.</p>
              </div>
              <div className='flex items-center justify-center gap-2 mt-4 text-center'>
                <FontAwesomeIcon icon={faQuestionCircle} />
                <p className='fonte'>Construindo aplica????es responsivas.</p>
              </div>
              <div className='flex items-center justify-center gap-2 mt-4 text-center'>
                <FontAwesomeIcon icon={faQuestionCircle} />
                <p className='fonte'>Usando Design Patterns modernos.</p>
              </div>
              <div className='flex items-center justify-center gap-2 mt-4 text-center'>
                <FontAwesomeIcon icon={faQuestionCircle} />
                <p className='fonte'>Realizando testes de usuabilidade.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='back' className='scroll mt-16 flex flex-col lg:flex-row xl:flex-row justify-center items-center w-full xl:h-screen'>
        <div className='flex w-2/4 justify-center items-center margincenter'>
          <img src="https://www.getsetgoweb.com/assets/images/backend-devlopement/back-end-development.png" alt='teaching' className='w-3/5' />
        </div>
        <div className='flex-col w-2/4 margincenter'>
          <div className='flex justify-center mx-auto w-2/4'>
            <h1 data-aos="fade-left" data-aos-delay="500"
              className='text-6xl text-primary border-b-2 border-quinary text-center fonte'>Back End</h1>
          </div>
          <div className='flex flex-col justify-center items-center sm:w-2/4 xl:w-1/3 mx-auto mt-2'>
            <FrontItem img="https://findicons.com/files/icons/2420/coded/256/sql.png" text="SQL" />
            <FrontItem img="https://api.civo.com/k3s-marketplace/mongodb.png" text="NoSQL" />
            <FrontItem img="https://cyb3rd.github.io/img/expressjs.png" text="Express" />
            <FrontItem img="https://miro.medium.com/max/475/0*DiQd7JoB2X5C_Bng.png" text="TDD" />
            <FrontItem img="https://yosoy.dev/wp-content/uploads/2014/09/orm.png" text="ORM" />
            <FrontItem img="https://programathor.com.br/blog/wp-content/uploads/2018/08/api-768x768.png" text="API RESTful" />
          </div>
          <div>
            <div className='mt-4 flex flex-col justify-center mx-auto'>
              <div className='flex items-center justify-center mt-4 text-center gap-2'>
                <FontAwesomeIcon icon={faQuestionCircle} />
                <p className='fonte'>Experi??ncia trabalhando com frameworks.</p>
              </div>
              <div className='flex items-center justify-center mt-4 text-center gap-2'>
                <FontAwesomeIcon icon={faQuestionCircle} />
                <p className='fonte'>Experi??ncia realizando deploy de back-end.</p>
              </div>
              <div className='flex items-center justify-center mt-4 text-center gap-2'>
                <FontAwesomeIcon icon={faQuestionCircle} />
                <p className='fonte'>Construindo aplica????es escalaveis.</p>
              </div>
              <div className='flex items-center justify-center mt-4 text-center gap-2'>
                <FontAwesomeIcon icon={faQuestionCircle} />
                <p className='fonte'>Usando Design Patterns modernos.</p>
              </div>
              <div className='flex items-center justify-center mt-4 text-center gap-2'>
                <FontAwesomeIcon icon={faQuestionCircle} />
                <p className='fonte'>Realizando testes de integra????o.</p>
              </div>
              <div className='flex items-center justify-center mt-4 text-center gap-2'>
                <FontAwesomeIcon icon={faQuestionCircle} />
                <p className='fonte text-center'>Utilizando CI/CD (integra????o e entrega continua).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default MoreMe