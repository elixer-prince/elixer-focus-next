import useCountdownContext from "@/lib/hooks/timer/useCountdownContext";

const useCountdownAlerts = () => {
  const { modalRef } = useCountdownContext();

  const alertUserOfTimerEnd = () => {
    modalRef.current?.showModal();
  };

  return { alertUserOfTimerEnd };
};

export default useCountdownAlerts;
