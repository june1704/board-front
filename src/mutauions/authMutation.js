import { useMutation } from "@tanstack/react-query";
import { joinApi, loginApi } from "../apis/authApi";
// 분리를 해두면 다른 곳에서 재사용을 할 수 있어서. 코드를 다 볼 수 없기에 분리를 해두었음
export const useJoinMutation = () => useMutation({
    mutationKey: ["joinMutation"],
    mutationFn: joinApi,
    retry: 0,
});

export const useLoginMutation = () => useMutation({
    mutationKey: ["loginMutation"],
    mutationFn: loginApi,
    retry: 0,
})