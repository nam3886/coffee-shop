import { handleCallApi } from "@/services/reuseable/handleCallApi";
import { ref } from "vue";

export default function () {
  const { response, errors, loading, action } = handleCallApi();
  const districtList = ref([]);
  const wardList = ref([]);

  async function getDistrictList() {
    await action("get", "/location/district");
    districtList.value = response.value;
  }

  async function getWardList(district_id) {
    await action("get", "/location/ward", {
      params: { district_id: `${district_id}` },
    });
    wardList.value = response.value;
  }

  return {
    response,
    errors,
    loading,
    districtList,
    wardList,
    getDistrictList,
    getWardList,
  };
}
