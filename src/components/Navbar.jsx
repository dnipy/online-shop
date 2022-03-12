export default function Navbar () {
    return(
        <div className="">
            <nav class="navbar navbar-expand-lg navbar-light bg-light pr-5 pl-5">
                <a class="navbar-brand" href="/">Home</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/shop">shop</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/categories">categories</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}