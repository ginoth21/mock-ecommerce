const createFooter = () =>{
    let footer = document.querySelector('footer');
    footer.innerHTML = ` 
    <div class="footer-content">
        <img src="img/glogo.jpeg" class="logo" alt="">
        
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">games</li>
                <li><a href="#" class="footer-link">most popular</a></li>
                <li><a href="#" class="footer-link">action</a></li>
                <li><a href="#" class="footer-link">story</a></li>
                <li><a href="#" class="footer-link">shooters</a></li>
                <li><a href="#" class="footer-link">sports</a></li>
                <li><a href="#" class="footer-link">racing</a></li>
            </ul>

            <ul class="category">
                <li class="category-title">other stuff</li>
                <li><a href="#" class="footer-link">clothes</a></li>
                <li><a href="#" class="footer-link">action figures</a></li>
                <li><a href="#" class="footer-link">keyboards & mouses</a></li>
                <li><a href="#" class="footer-link">controllers</a></li>
                <li><a href="#" class="footer-link">consoles</a></li>
                <li><a href="#" class="footer-link">monitors</a></li>
            </ul>
        </div>
    </div>

    <p class="footer-title">about company</p>
    <p class="info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti ullam quo reiciendis odit natus dolores, distinctio nesciunt minima modi provident quos consequatur perferendis nam. Doloremque atque delectus natus modi facilis.</p>
    <p class="info">support emails - help@gmail.com</p>
    <p class="info">telephone: 647-901-5264</p>

    <div class="footer-social-container">
    <div>
        <a href="#" class="social-link">terms of service</a>
        <a href="#" class="social-link">privacy policy</a>
    </div>

    <div>
        <a href="#" class="social-link">instagram</a>
        <a href="#" class="social-link">facebook</a>
        <a href="#" class="social-link">twitter</a>
    </div>
    </div>

    <p class="footer-credit">big g gaming - the best gaming online store</p>
`}

createFooter();

