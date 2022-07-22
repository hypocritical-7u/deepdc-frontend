import request from "@/utils/request";

export function getSummaryInfo() {
  return request({
    url: "api/get_summary_info",
    method: "get"
  });
}
export function getAllTemp(room_id: string) {
  return request({
    url: "api/get_all_temp",
    method: "get",
    params: { room_id },
  });
}
