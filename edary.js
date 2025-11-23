   // بيانات تجريبية
        const employees = [{
            groupId: 1,
            name: "احمد سعد محمود",
            title: "وكيل وزارة"
        }, {
            groupId: 1,
            name: "شريف جمال الدين حسن",
            title: "مدير عام"
        }, {
            groupId: 1,
            name: "ايناس بدر حسينى",
            title: "مراجع اول"
        }, {
            groupId: 2,
            name: "وفاء محمد متولى",
            title: "وكيل وزارة"
        }, {
            groupId: 2,
            name: "مهاب منير اسكندر",
            title: "مدير عام"
        }, {
            groupId: 3,
            name: "وفاء محمد متولى",
            title: "وكيل وزارة"
        }, {
            groupId: 3,
            name: "انجى تادرس ذكي",
            title: "مراقب حسابات"
        }, {
            groupId: 3,
            name: "شيماء رشاد محمد",
            title: "مراجع أول"
        }, {
            groupId: 4,
            name: "اميرة شعبان محمد",
            title: "وكيل وزارة"
        }, {
            groupId: 4,
            name: "شيرين مصطفى صابر",
            title: "مراقب حسابات"
        }, {
            groupId: 5,
            name: "ماهر عبدالسلام طه",
            title: "وكيل وزارة"
        }, {
            groupId: 5,
            name: "عبدالله سامى احمد",
            title: "مراجع اول"
        }, {
            groupId: 6,
            name: "حسن بدوي حسن",
            title: "وكيل وزارة"
        }, {
            groupId: 6,
            name: "ايه احمد فوزى",
            title: "مراجع اول"
        }, {
            groupId: 7,
            name: "حسن بدوي حسن",
            title: "وكيل وزارة"
        }, {
            groupId: 7,
            name: "محمد امين اسعد",
            title: "مدير عام"
        }, {
            groupId: 8,
            name: "فيوليت سليم غالى",
            title: "وكيل وزارة"
        }, {
            groupId: 8,
            name: "ايرينى ميلاد داود",
            title: "مراجع اول"
        }, {
            groupId: 8,
            name: "حسناء عبدالمالك",
            title: "مراجع اول"
        }, {
            groupId: 9,
            name: "علاء الدين هلال",
            title: "وكيل وزارة"
        }, {
            groupId: 9,
            name: "رجب حسن سيد",
            title: "مراجع اول"
        }, {
            groupId: 10,
            name: "مسعد نجدى محمد",
            title: "وكيل وزارة"
        }, {
            groupId: 11,
            name: "عماد الدين محمد احمد",
            title: "وكيل وزارة"
        }, {
            groupId: 11,
            name: "عماد رجب سيد",
            title: "وكيل وزارة"
        }, {
            groupId: 11,
            name: "منى زكريا حامد",
            title: "مراقب حسابات"
        }, {
            groupId: 11,
            name: "ايمان حسن رمضان",
            title: "مراجع اول"
        }, {
            groupId: 12,
            name: "طلال عزت",
            title: "وكيل وزارة"
        }, {
            groupId: 12,
            name: "محمد عمر",
            title: "مراجع اول"
        }, {
            groupId: 13,
            name: "نجاح احمد القفاص",
            title: "وكيل وزارة"
        }, ];

        const departments = [{
            groupId: 1,
            department: "فرع السويس شامل"
        }, {
            groupId: 1,
            department: "فرع الفيوم"
        }, {
            groupId: 1,
            department: "فرع المنوفية"
        }, {
            groupId: 1,
            department: "مستشفى مدينة نصر"
        }, {
            groupId: 1,
            department: "مستشفى اطفال مصر"
        }, {
            groupId: 2,
            department: "رئاسة هيئة التأمين الشامل"
        }, {
            groupId: 2,
            department: "مركز الأورام مدينة نصر"
        }, {
            groupId: 3,
            department: "مستشفى 6 اكتوبر"
        }, {
            groupId: 3,
            department: "المنطقة الرابعة فرع القاهرة"
        }, {
            groupId: 4,
            department: "مستشفى صيدناوى"
        }, {
            groupId: 4,
            department: "منطقة أولى فرع القاهرة"
        }, {
            groupId: 4,
            department: "مستشفى القبطى"
        }, {
            groupId: 5,
            department: "فرع بورسعيد"
        }, {
            groupId: 5,
            department: "فرع الغربية"
        }, {
            groupId: 5,
            department: "فرع شمال شرق الدلتا"
        }, {
            groupId: 5,
            department: "مستشفى الإصلاح الإسلامي"
        }, {
            groupId: 6,
            department: "ديوان المؤسسة"
        }, {
            groupId: 6,
            department: "فرع شمال الصعيد(الجيزة)"
        }, {
            groupId: 7,
            department: "فرع وسط الصعيد (أسيوط)"
        }, {
            groupId: 7,
            department: "فرع المنيا"
        }, {
            groupId: 7,
            department: "فرع اسوان شامل"
        }, {
            groupId: 8,
            department: "المنطقة الخامسة فرع القاهرة"
        }, {
            groupId: 8,
            department: "مستشفى مبرة المعادى"
        }, {
            groupId: 8,
            department: "مستشفى مبرة مصر القديمة"
        }, {
            groupId: 9,
            department: "فرع الأقصر شامل"
        }, {
            groupId: 9,
            department: "ديوان فرع القاهرة"
        }, {
            groupId: 9,
            department: "منطقة الوادي الجديد"
        }, {
            groupId: 9,
            department: "فرع جنوب الصعيد(قنا)"
        }, {
            groupId: 10,
            department: "فرع بنى سويف"
        }, {
            groupId: 10,
            department: "فرع القليوبية"
        }, {
            groupId: 11,
            department: "رئاسة الهيئة "
        }, {
            groupId: 11,
            department: "مستشفى العاصمة"
        }, {
            groupId: 11,
            department: "فرع جنوب سيناء شامل"
        }, {
            groupId: 11,
            department: "فرع الشرقية"
        }, {
            groupId: 11,
            department: "فرع الإسماعيلية"
        }, {
            groupId: 11,
            department: "فرع كفر الشيخ"
        }, {
            groupId: 12,
            department: "فرع سوهاج"
        }, {
            groupId: 12,
            department: "منطقة البحر الأحمر"
        }, {
            groupId: 12,
            department: "منطقة شمال سيناء"
        }, {
            groupId: 12,
            department: "المنطقة الثانية فرع القاهرة"
        }, {
            groupId: 13,
            department: "مستشفى هليوبوليس"
        }, {
            groupId: 13,
            department: "مستشفى المقطم"
        }, ];

        const groupButtonsContainer = document.getElementById("group-buttons");
        const employeeList = document.getElementById("employee-list");
        const departmentList = document.getElementById("department-list");
        const employeeEmpty = document.getElementById("employee-empty");
        const departmentEmpty = document.getElementById("department-empty");

        // الحصول على جميع groupId
        const groupIds = [...new Set([...employees.map(e => e.groupId), ...departments.map(d => d.groupId)])];

        // إنشاء أزرار لكل مجموعة
        groupIds.forEach(id => {
            const btn = document.createElement("button");
            btn.textContent = `المجموعة ${id}`;
            btn.addEventListener("click", () => displayGroup(id));
            groupButtonsContainer.appendChild(btn);
        });

        // عرض الموظفين والأقسام حسب المجموعة
        function displayGroup(groupId) {
            const groupEmployees = employees.filter(e => e.groupId === groupId);
            const groupDepartments = departments.filter(d => d.groupId === groupId);

            renderList(employeeList, groupEmployees.map(e => `${e.name} (${e.title})`), employeeEmpty);
            renderList(departmentList, groupDepartments.map(d => d.department), departmentEmpty);

            document.getElementById("employee-search").value = "";
            document.getElementById("department-search").value = "";
        }

        // عرض جميع الموظفين
        document.getElementById("all-employees-btn").addEventListener("click", () => {
            renderList(departmentList, "", departmentEmpty);
            renderList(employeeList, employees.map(e => `${e.name} (${e.title})`), employeeEmpty);
            document.getElementById("employee-search").value = "";
        });

        // عرض جميع الأقسام
        document.getElementById("all-departments-btn").addEventListener("click", () => {
            renderList(employeeList, "", employeeEmpty);
            renderList(departmentList, departments.map(d => d.department), departmentEmpty);
            document.getElementById("department-search").value = "";
        });

        // عرض القائمة
        function renderList(listElement, items, emptyElement) {
            listElement.innerHTML = "";
            if (items.length === 0) {
                emptyElement.style.display = "block";
                return;
            }
            emptyElement.style.display = "none";
            items.forEach(item => {
                const li = document.createElement("li");
                li.textContent = item;
                li.addEventListener("click", () => {
                    const groupId = findGroupId(item);
                    if (groupId) displayGroup(groupId);
                });
                listElement.appendChild(li);
            });
        }

        // البحث
        document.getElementById("employee-search").addEventListener("input", function() {
            filterList(employeeList, this.value, employeeEmpty);
        });
        document.getElementById("department-search").addEventListener("input", function() {
            filterList(departmentList, this.value, departmentEmpty);
        });

        function filterList(listElement, query, emptyElement) {
            const items = listElement.querySelectorAll("li");
            let visibleCount = 0;
            items.forEach(li => {
                if (li.textContent.toLowerCase().includes(query.toLowerCase())) {
                    li.style.display = "";
                    visibleCount++;
                } else {
                    li.style.display = "none";
                }
            });
            emptyElement.style.display = visibleCount === 0 ? "block" : "none";
        }

        // إيجاد groupId من النص
        function findGroupId(itemText) {
            const emp = employees.find(e => `${e.name} (${e.title})` === itemText);
            if (emp) return emp.groupId;
            const dept = departments.find(d => d.department === itemText);
            if (dept) return dept.groupId;
            return null;
        }
