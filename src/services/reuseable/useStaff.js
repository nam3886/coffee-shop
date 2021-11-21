import { handleCallApi } from "@/services/reuseable/handleCallApi";
import { ref } from "vue";

export default function () {
  const { response, errors, loading, action } = handleCallApi();
  const listOrderForStaff = ref([]);
  const checkinListForStaff = ref([]);

  async function getListOrderForStaff(params) {
    await action("get", "/list-order", { params });
    listOrderForStaff.value = response.value;
  }

  async function getListCheckinForStaff(params) {
    await action("get", "/list-checkin", { params });
    checkinListForStaff.value = response.value;
  }

  async function confirmReceived(notificationId) {
    await action("post", "/confirm-received/" + notificationId);
  }

  async function confirmPaid(orderId) {
    await action("post", "/confirm-paid/" + orderId);
  }

  async function confirmCheckout(orderId) {
    await action("post", "/confirm-paid/" + orderId);
  }

  return {
    response,
    errors,
    loading,
    listOrderForStaff,
    getListOrderForStaff,
    confirmReceived,
    confirmPaid,
    getListCheckinForStaff,
    checkinListForStaff,
    confirmCheckout,
  };
}
