import LangIco from "../../assets/bx-world.svg"
import DownIco from "../../assets/bx-chevron-down.svg"
import DownChevron from "./Styles/DownChevron"
import LangSelector from './Styles/LangSelector'
import DropdownContent from "./Styles/DropdownContent"
import { useEffect, useState } from "react"

interface Lang {
    lang: string,
    setLang: Function,
    handleClick: Function,
    dropdownActive: boolean,
    setDropdownActive: Function
}

const Language: React.FC<Lang> =
    ({ lang, setLang, handleClick, dropdownActive}) => {


        useEffect(() => {
            console.log(lang)
        }, [lang])
        return (
            <>
                <LangSelector onClick={()=> handleClick} src={LangIco}></LangSelector>
                {lang}
                <DownChevron onClick={()=>handleClick} src={DownIco}></DownChevron>
                {
                    dropdownActive ?
                        <DropdownContent>
                            <div onClick={() => {
                                console.log("click espanol")
                                setLang("ES")
                                handleClick()
                            }}>
                                Español  <b>ES</b>
                            </div>
                            <div onClick={() => {
                                setLang("EN")
                                handleClick()
                            }
                            }>
                                English  <b>EN</b>
                            </div>
                        </DropdownContent> :
                        <> </>
                }

            </>
        )
    }

export default Language