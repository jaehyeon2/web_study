<?php
$ch= curl_init();
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
//SSL 인증서 검사 여부 결정
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
//결괏값을 받을 것인지의 여부 설정
curl_setopt($ch, CURLOPT_HEADER, 0);
//헤더 정보 출력 여부 설정
curl_setopt($ch, CURLOPT_URL,
		   "http://www.khan.co.kr/rss/rssdata/itnews.xml");
$url_source=curl_exec($ch);
//curl 세션 실행
curl_close($ch);

echo $url_source;
?>