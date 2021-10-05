<template>
  <div class="col-md-8 mb-3">
    <div>
      <div
        id="accordionExample"
        class="accordion mb-3 rounded shadow-sm bg-white overflow-hidden"
      >
        <div class="osahan-card bg-white border-bottom overflow-hidden">
          <div id="headingOne" class="osahan-card-header">
            <h2 class="mb-0">
              <button
                class="d-flex p-3 align-items-center btn btn-link w-100"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <i class="feather-credit-card mr-3"></i> Credit/Debit Card
                <i class="feather-chevron-down ml-auto"></i>
              </button>
            </h2>
          </div>
          <div
            id="collapseOne"
            class="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div class="osahan-card-body border-top p-3">
              <h6 class="m-0">Add new card</h6>
              <p class="small">
                WE ACCEPT
                <span class="osahan-card ml-2 font-weight-bold"
                  >( Master Card / Visa Card / Rupay )</span
                >
              </p>
              <form>
                <div class="form-row">
                  <div class="col-md-12 form-group">
                    <label class="form-label font-weight-bold small"
                      >Card number</label
                    >
                    <div class="input-group">
                      <input
                        placeholder="Card number"
                        type="number"
                        class="form-control"
                      />
                      <div class="input-group-append">
                        <button type="button" class="btn btn-outline-secondary">
                          <i class="feather-credit-card"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-8 form-group">
                    <label class="form-label font-weight-bold small"
                      >Valid through(MM/YY)</label
                    ><input
                      placeholder="Enter Valid through(MM/YY)"
                      type="number"
                      class="form-control"
                    />
                  </div>
                  <div class="col-md-4 form-group">
                    <label class="form-label font-weight-bold small">CVV</label
                    ><input
                      placeholder="Enter CVV Number"
                      type="number"
                      class="form-control"
                    />
                  </div>
                  <div class="col-md-12 form-group">
                    <label class="form-label font-weight-bold small"
                      >Name on card</label
                    ><input
                      placeholder="Enter Card number"
                      type="text"
                      class="form-control"
                    />
                  </div>
                  <div class="col-md-12 form-group mb-0">
                    <div class="custom-control custom-checkbox">
                      <input
                        id="custom-checkbox1"
                        type="checkbox"
                        class="custom-control-input"
                      /><label
                        title=""
                        type="checkbox"
                        for="custom-checkbox1"
                        class="custom-control-label small pt-1"
                        >Securely save this card for a faster checkout next
                        time.</label
                      >
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="osahan-card bg-white border-bottom overflow-hidden">
          <div id="headingTwo" class="osahan-card-header">
            <h2 class="mb-0">
              <button
                class="d-flex p-3 align-items-center btn btn-link w-100"
                type="button"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <i class="feather-globe mr-3"></i> Net Banking
                <i class="feather-chevron-down ml-auto"></i>
              </button>
            </h2>
          </div>
          <div
            id="collapseTwo"
            class="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionExample"
          >
            <div class="osahan-card-body border-top p-3">
              <form>
                <div
                  class="btn-group btn-group-toggle w-100"
                  data-toggle="buttons"
                >
                  <label class="btn btn-outline-secondary active">
                    <input id="option1" type="radio" name="options" checked />
                    HDFC
                  </label>
                  <label class="btn btn-outline-secondary">
                    <input id="option2" type="radio" name="options" />
                    ICICI
                  </label>
                  <label class="btn btn-outline-secondary">
                    <input id="option3" type="radio" name="options" />
                    AXIS
                  </label>
                </div>
                <hr />
                <div class="form-row">
                  <div class="col-md-12 form-group mb-0">
                    <label class="form-label small font-weight-bold"
                      >Select Bank</label
                    ><br />
                    <select class="custom-select form-control">
                      <option>Bank</option>
                      <option>KOTAK</option>
                      <option>SBI</option>
                      <option>UCO</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="osahan-card bg-white overflow-hidden">
          <div id="headingThree" class="osahan-card-header">
            <h2 class="mb-0">
              <button
                class="d-flex p-3 align-items-center btn btn-link w-100"
                type="button"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <i class="feather-dollar-sign mr-3"></i> Cash on Delivery
                <i class="feather-chevron-down ml-auto"></i>
              </button>
            </h2>
          </div>
          <div
            id="collapseThree"
            class="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordionExample"
          >
            <div class="card-body border-top">
              <h6 class="mb-3 mt-0 mb-3 font-weight-bold">Cash</h6>
              <p class="m-0">
                Please keep exact change handy to help us serve you better
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
