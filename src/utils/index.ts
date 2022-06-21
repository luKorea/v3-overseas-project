export function getUserIP(onNewIP: any): any {
  const MyPeerConnection =
    (window as any).RTCPeerConnection ||
    (window as any).mozRTCPeerConnection ||
    (window as any).webkitRTCPeerConnection;
  const pc = new MyPeerConnection({
    iceServers: [],
  });
  const noop = () => ({});
  const localIPs: any = {};
  const ipRegex =
    /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g;
  const iterateIP = (ip: any) => {
    if (!localIPs[ip]) onNewIP(ip);
    localIPs[ip] = true;
  };
  pc.createDataChannel("");
  pc.createOffer()
    .then((sdp: any) => {
      sdp.sdp.split("\n").forEach(function (line: any) {
        if (line.indexOf("candidate") < 0) return;
        line.match(ipRegex).forEach(iterateIP);
      });
      pc.setLocalDescription(sdp, noop, noop);
    })
    .catch(() => ({}));
  pc.onicecandidate = (ice: any) => {
    if (
      !ice ||
      !ice.candidate ||
      !ice.candidate.candidate ||
      !ice.candidate.candidate.match(ipRegex)
    )
      return;
    ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
  };
}
