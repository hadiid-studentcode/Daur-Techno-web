import React from "react";
import person1 from "../Assets/img/team/avatar2.jpg";
import person2 from "../Assets/img/team/avatar4.jpg";
import person3 from "../Assets/img/team/avatar5.jpg";



export default function Section4() {
  return (
    <div>
      <section class="py-5 mt-5">
        <div class="container py-5">
          <div class="row mb-5">
            <div class="col-md-8 col-xl-6 text-center mx-auto">
              <p class="fw-bold text-success mb-2">Testimonials</p>
              <h2 class="fw-bold">
                <strong>What People Say About us</strong>
              </h2>
              <p class="text-muted w-lg-50">
                No matter the project, our team can handle it.&nbsp;
              </p>
            </div>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 d-sm-flex justify-content-sm-center">
            <div class="col mb-4">
              <div class="d-flex flex-column align-items-center align-items-sm-start">
                <p class="bg-light border rounded border-light p-4">
                  Nisi sit justo faucibus nec ornare amet, tortor torquent.
                  Blandit class dapibus, aliquet morbi.
                </p>
                <div class="d-flex">
                  <img
                    class="rounded-circle flex-shrink-0 me-3 fit-cover"
                    width="50"
                    height="50"
                    src={person1}
                    alt=""
                  />
                  <div>
                    <p class="fw-bold text-primary mb-0">John Smith</p>
                    <p class="text-muted mb-0">Erat netus</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-4">
              <div class="d-flex flex-column align-items-center align-items-sm-start">
                <p class="bg-light border rounded border-light p-4">
                  Nisi sit justo faucibus nec ornare amet, tortor torquent.
                  Blandit class dapibus, aliquet morbi.
                </p>
                <div class="d-flex">
                  <img
                    class="rounded-circle flex-shrink-0 me-3 fit-cover"
                    width="50"
                    height="50"
                    src={person2}
                    alt=""
                  />
                  <div>
                    <p class="fw-bold text-primary mb-0">John Smith</p>
                    <p class="text-muted mb-0">Erat netus</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-4">
              <div class="d-flex flex-column align-items-center align-items-sm-start">
                <p class="bg-light border rounded border-light p-4">
                  Nisi sit justo faucibus nec ornare amet, tortor torquent.
                  Blandit class dapibus, aliquet morbi.
                </p>
                <div class="d-flex">
                  <img
                    class="rounded-circle flex-shrink-0 me-3 fit-cover"
                    width="50"
                    height="50"
                    src={person3}
                    alt=""
                  />
                  <div>
                    <p class="fw-bold text-primary mb-0">John Smith</p>
                    <p class="text-muted mb-0">Erat netus</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
