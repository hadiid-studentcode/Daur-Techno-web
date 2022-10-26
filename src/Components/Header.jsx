import sampah1 from "../Assets/img/products/gary-chan-YzSZN3qvHeo-unsplash.jpg";
import sampah2 from "../Assets/img/products/evgeny-karchevsky-k1tUxfs8JYY-unsplash.jpg";
import sampah3 from "../Assets/img/products/thaiphirun-hul-oMyq9YjiZeE-unsplash.jpg";

function Header() {
  return (
    <div>
      <header class="bg-primary-gradient mt-5">
        <div class="container pt-4 pt-xl-5">
          <div class="row pt-5">
            <div class="col-md-8 col-xl-6 text-center text-md-start mx-auto">
              <div class="text-center">
                <p class="fw-bold text-success mb-2">Daur Techno Presents</p>
                <h1 class="fw-bold">
                  Green Earth Green Indonesia
                  <br />
                  Daur.co
                </h1>
              </div>
            </div>
            <div class="col-12 col-lg-10 mx-auto">
              <div class="position-relative sampah">
                <div className="sampah1">
                  <img
                    class="img-fluid"
                    data-bss-parallax=""
                    data-bss-parallax-speed="0.8"
                    src={sampah1}
                    alt="sampah1"
                  />
                </div>
                <div className="sampah2">
                  <img
                    class="img-fluid"
                    data-bss-parallax=""
                    data-bss-parallax-speed="0.4"
                    src={sampah2}
                    alt="sampah2"
                  />
                </div>
                <div className="sampah3">
                  <img
                    class="img-fluid"
                    data-bss-parallax=""
                    data-bss-parallax-speed="0.25"
                    src={sampah3}
                    width="389"
                    height="486"
                    alt="sampah3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
