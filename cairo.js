        // المتغيرات العامة
        let currentTimezone = 'cairo';
        let cairoBaseTime = null;
        let muscatBaseTime = null;

        // عناصر DOM
        const elements = {
            temperature: document.getElementById('temperature'),
            weatherDesc: document.getElementById('weatherDesc'),
            location: document.getElementById('location'),
            cairoTime: document.getElementById('cairoTime'),
            cairoDate: document.getElementById('cairoDate'),
            cairoInput: document.getElementById('cairoInput'),
            muscatTime: document.getElementById('muscatTime'),
            muscatDate: document.getElementById('muscatDate'),
            muscatInput: document.getElementById('muscatInput'),
            timeComparison: document.getElementById('timeComparison'),
            loading: document.getElementById('loading'),
            cairoCard: document.getElementById('cairoCard'),
            muscatCard: document.getElementById('muscatCard')
        };

        // تهيئة التطبيق
        function init() {
            updateWeather();
            setInitialTimes();
            setupEventListeners();
        }

        // تعيين الأوقات الافتراضية عند التحميل
        function setInitialTimes() {
            const now = new Date();

            // وقت القاهرة الافتراضي
            cairoBaseTime = new Date(now.toLocaleString("en-US", {
                timeZone: "Africa/Cairo"
            }));
            updateTimeDisplay('cairo', cairoBaseTime);
            elements.cairoInput.value = formatTimeForInput(cairoBaseTime);

            // وقت مسقط الافتراضي
            muscatBaseTime = new Date(now.toLocaleString("en-US", {
                timeZone: "Asia/Muscat"
            }));
            updateTimeDisplay('muscat', muscatBaseTime);
            elements.muscatInput.value = formatTimeForInput(muscatBaseTime);

            updateTimeComparison(cairoBaseTime, muscatBaseTime);
        }

        // إعداد مستمعي الأحداث
        function setupEventListeners() {
            // عند تغيير وقت القاهرة
            elements.cairoInput.addEventListener('change', function(e) {
                if (this.value) {
                    const [hours, minutes] = this.value.split(':').map(Number);
                    const newCairoTime = new Date();
                    newCairoTime.setHours(hours, minutes, 0);

                    cairoBaseTime = newCairoTime;
                    updateTimeDisplay('cairo', newCairoTime);

                    // تحديث وقت مسقط المقابل
                    const newMuscatTime = calculateCorrespondingTime(newCairoTime, 'cairo', 'muscat');
                    muscatBaseTime = newMuscatTime;
                    updateTimeDisplay('muscat', newMuscatTime);
                    elements.muscatInput.value = formatTimeForInput(newMuscatTime);

                    updateTimeComparison(newCairoTime, newMuscatTime);
                }
            });

            // عند تغيير وقت مسقط
            elements.muscatInput.addEventListener('change', function(e) {
                if (this.value) {
                    const [hours, minutes] = this.value.split(':').map(Number);
                    const newMuscatTime = new Date();
                    newMuscatTime.setHours(hours, minutes, 0);

                    muscatBaseTime = newMuscatTime;
                    updateTimeDisplay('muscat', newMuscatTime);

                    // تحديث وقت القاهرة المقابل
                    const newCairoTime = calculateCorrespondingTime(newMuscatTime, 'muscat', 'cairo');
                    cairoBaseTime = newCairoTime;
                    updateTimeDisplay('cairo', newCairoTime);
                    elements.cairoInput.value = formatTimeForInput(newCairoTime);

                    updateTimeComparison(newCairoTime, newMuscatTime);
                }
            });
        }

        // حساب الوقت المقابل بين المدينتين
        function calculateCorrespondingTime(sourceTime, fromCity, toCity) {
            const resultTime = new Date(sourceTime);

            if (fromCity === 'cairo' && toCity === 'muscat') {
                // من القاهرة إلى مسقط: +1 ساعة في الصيف، +2 في الشتاء
                const isSummerTime = isCairoSummerTime(sourceTime);
                resultTime.setHours(resultTime.getHours() + (isSummerTime ? 1 : 2));
            } else if (fromCity === 'muscat' && toCity === 'cairo') {
                // من مسقط إلى القاهرة: -1 ساعة في الصيف، -2 في الشتاء
                const isSummerTime = isCairoSummerTime(sourceTime);
                resultTime.setHours(resultTime.getHours() - (isSummerTime ? 1 : 2));
            }

            return resultTime;
        }

        // تحديث بيانات الطقس
        async function updateWeather() {
            try {
                elements.weatherDesc.textContent = 'جاري جلب بيانات الطقس...';

                // في بيئة الإنتاج، استخدم مفتاح API حقيقي من OpenWeatherMap
                // const apiKey = 'your_api_key_here';
                // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Cairo&units=metric&appid=${apiKey}&lang=ar`);

                // لمثالنا، سنستخدم بيانات افتراضية
                setTimeout(() => {
                    elements.temperature.textContent = '25°C';
                    elements.weatherDesc.textContent = 'غائم جزئياً';
                    elements.loading.style.display = 'none';
                }, 1500);

            } catch (error) {
                console.error('Error fetching weather:', error);
                elements.weatherDesc.textContent = 'غير متوفر - اتصال بالإنترنت مطلوب';
                elements.temperature.textContent = '--°C';

                // بيانات افتراضية للعرض
                setTimeout(() => {
                    elements.temperature.textContent = '25°C';
                    elements.weatherDesc.textContent = 'غائم جزئياً';
                    elements.loading.style.display = 'none';
                }, 2000);
            }
        }

        // تحديث عرض الوقت
        function updateTimeDisplay(city, date) {
            const timeString = date.toLocaleTimeString('ar-EG', {
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });

            const dateString = date.toLocaleDateString('ar-EG', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            if (city === 'cairo') {
                elements.cairoTime.textContent = timeString;
                elements.cairoDate.textContent = dateString;
            } else {
                elements.muscatTime.textContent = timeString;
                elements.muscatDate.textContent = dateString;
            }
        }

        // تنسيق الوقت لحقل الإدخال
        function formatTimeForInput(date) {
            return date.toTimeString().substring(0, 5);
        }

        // تحديث المقارنة بين التوقيتين
        function updateTimeComparison(cairoTime, muscatTime) {
            const diff = muscatTime.getTime() - cairoTime.getTime();
            const diffHours = Math.floor(diff / (1000 * 60 * 60));
            const diffMinutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

            let comparisonText = '';
            if (diffHours === 0 && diffMinutes === 0) {
                comparisonText = 'التوقيتان متطابقان';
            } else {
                const absDiffHours = Math.abs(diffHours);
                const absDiffMinutes = Math.abs(diffMinutes);
                const direction = diff > 0 ? 'أمام' : 'خلف';
                comparisonText = `مسقط ${direction} القاهرة بـ ${absDiffHours} ساعة و ${absDiffMinutes} دقيقة`;
            }

            elements.timeComparison.textContent = comparisonText;
        }

        // التحقق إذا كان التوقيت الصيفي في القاهرة
        function isCairoSummerTime(date) {
            // التوقيت الصيفي في مصر: من آخر جمعة في أبريل إلى آخر خميس في أكتوبر
            const year = date.getFullYear();
            const april = new Date(year, 3, 30); // أبريل
            const october = new Date(year, 9, 31); // أكتوبر

            // آخر جمعة في أبريل
            const lastFridayApril = new Date(april);
            lastFridayApril.setDate(april.getDate() - (april.getDay() + 1) % 7);

            // آخر خميس في أكتوبر
            const lastThursdayOctober = new Date(october);
            lastThursdayOctober.setDate(october.getDate() - (october.getDay() + 2) % 7);

            return date >= lastFridayApril && date <= lastThursdayOctober;
        }

        // تبديل التوقيت بين المدينتين
        function switchTimeZones() {
            const cairoCard = elements.cairoCard;
            const muscatCard = elements.muscatCard;

            if (currentTimezone === 'cairo') {
                currentTimezone = 'muscat';
                cairoCard.classList.remove('active');
                muscatCard.classList.add('active');
            } else {
                currentTimezone = 'cairo';
                muscatCard.classList.remove('active');
                cairoCard.classList.add('active');
            }
        }

        // بدء التطبيق
        document.addEventListener('DOMContentLoaded', init);
    </script>
<!-- Code injected by live-server -->
<script>
	// <![CDATA[  <-- For SVG support
	if ('WebSocket' in window) {
		(function () {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					var parent = elem.parentElement || head;
					parent.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
					}
					parent.appendChild(elem);
				}
			}
			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
			var address = protocol + window.location.host + window.location.pathname + '/ws';
			var socket = new WebSocket(address);
			socket.onmessage = function (msg) {
				if (msg.data == 'reload') window.location.reload();
				else if (msg.data == 'refreshcss') refreshCSS();
			};
			if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
				console.log('Live reload enabled.');
				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
			}
		})();
	}
	else {
		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
	}
