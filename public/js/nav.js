const createNav = () => {
    let nav = document.querySelector('.navbar');
    nav.innerHTML = `
        <div class="nav">
            <img src="img/glogo.jpeg" class="brand-logo" alt="">

            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search for games and stuff">
                    <button class="search-btn">search</button>
                </div>

                <a href="#"><img src="img/Sample_User_Icon.png" alt=""></a>
                <a href="#"><img src="img/cart.png" alt=""></a>
            </div>
        </div>

        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">home</a></li>
            <li class="link-item"><a href="#" class="link">page 2</a></li>
            <li class="link-item"><a href="#" class="link">page 3</a></li>
            <li class="link-item"><a href="#" class="link">page 4</a></li>
        </ul>
    `
}

createNav();