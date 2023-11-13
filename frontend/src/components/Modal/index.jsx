import { useContext, useState } from 'react'
import styles from './styles.scss'
import { Context } from '../../context/CharContext'
import { makeAlly } from '../../functions/makeAlly'

export function Modal({isOpen}){
    const { isModalOpen, setIsModalOpen, modalName, modalImage } = useContext(Context)

    function confirm(){
        makeAlly(modalName)
        setIsModalOpen(false)
    }

    function recuse(){
        setIsModalOpen(false)
    }

    return (
        isModalOpen &&
        <section className="modal_container">
            <span className='mask'>
                <p className='title'>
                    Você encontrou {modalName}
                </p>
            </span>
            
            <figure>
                <img src={modalImage} alt="Imagem do personagem encontrado" />
            </figure>
        
            <div className="options">
                <button onClick={() => confirm()}>Fazer Aliança</button>
                <button onClick={() => recuse()}>Matar</button>
            </div>
        </section>
    )
}