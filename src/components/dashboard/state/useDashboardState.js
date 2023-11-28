import { useEffect, useState } from "react";
import { API_ROUTES } from "../../../shared/api_routes";

import axios from "axios";

export const useDashboardState = () => {
    const [digimons, setDigimons] = useState();
    const [page, setPage] = useState(1);
    const [openModalDialog, setOpenModalDialog] = useState(false);
    const [digimon, setDigimon] = useState({})
    const [image, setImage] = useState("")

    const handleChange = (event, value) => {
        setPage(value);
        nextPage(value)
    };

    const handleCloseOpenDialog = () =>  setOpenModalDialog(false);

    const modalDialogProperties = {
        onClose: handleCloseOpenDialog,
        openModalDialog,
        digimon,
        image
    }

    useEffect(() => {
        axios.get(API_ROUTES.GET_DIGIMONS).then((response) =>setDigimons(response.data.content));
    }, [])

    const nextPage = (value) => axios.get(`${API_ROUTES.GET_DIGIMONS_PAGE}${value}`).then((response) => setDigimons(response.data.content));

    const handleopenModal = (id, image) => {
        axios.get(`${API_ROUTES.GET_DIGIMON}${id}`).then((response) => setDigimon(response.data))

        setImage(image)
        setOpenModalDialog(true);
    }

    return {
        digimons,
        page,
        nextPage,
        handleChange,
        handleopenModal,
        modalDialogProperties
    }
}

