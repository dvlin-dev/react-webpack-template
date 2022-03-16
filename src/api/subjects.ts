import http from '@/utils/http';

export function addSubjects(data: { name: string; logo: string }) {
  return http({
    url: '/subjects',
    method: 'post',
    data,
  });
}
export function mySubjects() {
  return http('/subjects/mine');
}
export function delMySubject(id: number) {
  return http.delete(`/subjects/mine/${id}`);
}
