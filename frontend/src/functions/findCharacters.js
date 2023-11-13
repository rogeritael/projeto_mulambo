import { api } from "./api";
import { Context } from "../context/CharContext";

export async function findCharacters(steps, context) {
    const { setModalName, setIsModalOpen, setModalImage } = context;

    if (steps % 20 === 0 && steps !== 0) {
        try {
            const characters = await api.get('/characters')
                .then(({ data }) => {
                    return data;
                });

            const randomIndex = Math.floor(Math.random() * characters.length);

            setModalName(characters[randomIndex].name);
            setModalImage(characters[randomIndex].image);
            setIsModalOpen(true);
        } catch (err) {
            console.log(err);
        }
    }
}
