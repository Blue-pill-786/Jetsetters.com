import React, { useState } from 'react'
import Logo from '../assets/logos/logo.png'
import SearchAutoComplete from '../components/shared/SearchAutoComplete'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import WrapperLayout from '../components/Layouts/WrapperLayout'
import { LuUser2 } from 'react-icons/lu'
import { RiArrowDropDownLine } from 'react-icons/ri'
import PopupModal from '../components/shared/PopupModal'

const Cruise = () => {
    const [open, setOpen] = useState(false);
    const [openUserbox, setOpenUserbox] = useState(false)
    const [passengerData, setPassengerData] = useState({ adult: 2, children: 0, });
    const sumbitHandle = (e) => {
        e.preventDefault();
        setOpen(true);
    }
    return (
        <>
            Cruis Page is under process
        </>
    )
}

export default WrapperLayout("Cruise | Jetsetters", "Plan your trip with Jetsetters cruise service")(Cruise);