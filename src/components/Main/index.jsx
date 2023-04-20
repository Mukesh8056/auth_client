import styles from "./styles.module.css";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>DASBOARD</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Log out
				</button>
			</nav>
			<h1 className={styles.title}>Welcome To My Website</h1>
		</div>
	);
};

export default Main;
