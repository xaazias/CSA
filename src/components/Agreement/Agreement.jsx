import React from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import styles from "./Agreement.module.scss"

import { Checkbox } from "../Checkbox/Checkbox"

const Agreement = () => {
  const checkboxState = useSelector((state) => state.agreement)
  const dispatch = useDispatch()

  return (
    <div className={styles.agreement}>
      <h2>Пользовательское соглашение</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam
        nulla porttitor. In ante metus dictum at tempor commodo ullamcorper.
        Nisi est sit amet facilisis magna. Eros donec ac odio tempor orci
        dapibus ultrices in. Est pellentesque elit ullamcorper dignissim cras
        tincidunt lobortis. Tristique nulla aliquet enim tortor at auctor urna
        nunc id. Sapien pellentesque habitant morbi tristique senectus et netus
        et. Iaculis urna id volutpat lacus laoreet non curabitur gravida arcu.
        Sed nisi lacus sed viverra tellus in hac habitasse. Iaculis urna id
        volutpat lacus laoreet non. Nunc sed id semper risus in hendrerit
        gravida. Nisi lacus sed viverra tellus in hac habitasse platea dictumst.
        Eget mauris pharetra et ultrices. Lorem ipsum dolor sit amet.
        <br />
        <br />
        Vitae tortor condimentum lacinia quis vel eros donec ac. Amet purus
        gravida quis blandit turpis cursus in hac habitasse. Suspendisse
        faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Elit
        scelerisque mauris pellentesque pulvinar. Volutpat ac tincidunt vitae
        semper quis. Aliquet sagittis id consectetur purus ut faucibus. Egestas
        dui id ornare arcu odio ut. Euismod nisi porta lorem mollis aliquam ut
        porttitor leo. Ut enim blandit volutpat maecenas volutpat blandit
        aliquam etiam erat. Consectetur lorem donec massa sapien. Faucibus
        turpis in eu mi bibendum neque egestas. Sagittis vitae et leo duis ut
        diam quam nulla porttitor. Pellentesque habitant morbi tristique
        senectus et. Faucibus et molestie ac feugiat sed lectus vestibulum.
      </p>
      <div className={styles.actions}>
        <Checkbox onChange={() => dispatch({ type: "CHECK_AGREEMENT" })} />
        <button className={checkboxState ? "" : styles.disabled}>
          Подтвердить
        </button>
      </div>
    </div>
  )
}

export { Agreement }
