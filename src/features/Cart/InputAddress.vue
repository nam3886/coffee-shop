<template>
  <div class="form-group">
    <label class="form-label font-weight-bold small">Quận/Huyện</label>
    <v-select
      v-model="district"
      label="text"
      :options="districtList"
      :clearable="true"
    ></v-select>
  </div>

  <div class="form-group">
    <label class="form-label font-weight-bold small">Phường/Xã</label>
    <v-select
      v-model="ward"
      label="text"
      :options="wardList"
      :clearable="true"
      :loading="loading"
    ></v-select>
  </div>

  <div class="form-group">
    <label class="form-label font-weight-bold small">Địa chỉ</label>
    <div class="input-group">
      <input
        v-model="address"
        placeholder="Vd: 122, đường Trường Sa"
        type="text"
        class="form-control"
      />
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
import useAddress from "@/services/reuseable/useAddress";

export default {
  props: { modelValue: { type: Object, required: true } },

  emits: ["update:modelValue"],

  setup(props, { emit }) {
    const { districtList, wardList, getDistrictList, getWardList, loading } =
      useAddress();
    getDistrictList();

    const district = computed({
      get: () => props.modelValue.district_id,
      set: (district_id) =>
        emit("update:modelValue", { ...props.modelValue, district_id }),
    });
    const ward = computed({
      get: () => props.modelValue.ward_id,
      set: (ward_id) =>
        emit("update:modelValue", { ...props.modelValue, ward_id }),
    });
    const address = computed({
      get: () => props.modelValue.address,
      set: (address) =>
        emit("update:modelValue", { ...props.modelValue, address }),
    });

    watch(district, (val) => {
      generateFullAddress();
      val && getWardList(val.id);
    });
    watch(ward, generateFullAddress);
    watch(address, generateFullAddress);

    function generateFullAddress() {
      const districtName = district.value?.text;
      const wardName = ward.value?.text;
      const full_address = `${districtName} ${wardName} ${address.value}`;
      emit("update:modelValue", { ...props.modelValue, full_address });
    }

    return { districtList, wardList, district, ward, address, loading };
  },
};
</script>

<style></style>
