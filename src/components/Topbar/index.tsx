import React from "react";
import Button from "../common/Button";
import { signIn, signOut } from "next-auth/react";
import { useFetchSession } from "~/hooks/useSession";
import styles from './Topbar.module.scss';

export default function Topbar() {
  const { session } = useFetchSession();

  return (
    <div className={styles.authBtn}>
      {session ? (
        <img className={styles.profileImg} onClick={() => signOut()} src={session.user.image!} alt="profile picture" />
      ) : (
        <Button onClick={() => signIn()} btnClass='btn-primary' title='Sign In'/>
      )}
    </div>
  )
}