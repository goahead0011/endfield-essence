// Data Definitions

// Normalized Option Keys used internally
// Mappings from User Text / Image Text to these keys:
// "주요 능력치", "주요능력치 증가" -> "주요 능력치"
// "오리지늄 아츠", "오리지늄 아츠 증가" -> "오리지늄 아츠 강도" (Standardized by User Request)
// "궁극기 효율", "궁극기 획득 효율 증가", "궁극기 충전 효율" -> "궁극기 충전 효율" (Standardized by User Request)
// "최대 생명력" -> "생명력" (Standardized by User Request)
// All "XX 증가" -> "XX"

const OPTION_CATEGORIES = {
    "기초 속성": ["민첩", "힘", "의지", "지능", "주요 능력치"],
    "추가 속성": [
        "공격력", "생명력", "물리 피해", "열기 피해", "전기 피해", "냉기 피해", "자연 피해", 
        "아츠 피해", "오리지늄 아츠 강도", "치명타 확률", "궁극기 충전 효율", "치유 효율"
    ],
    "스킬 속성": [
        "강공", "억제", "추격", "분쇄", "기예", "방출", "흐름", "효율", 
        "사기", "잔혹", "고통", "의료", "골절", "어둠"
    ]
};

const ZONES = [
    {
        id: "zone4_stronghold",
        name: "4번협곡 - 거점 지역",
        options: new Set([
            "민첩", "힘", "의지", "지능", "주요 능력치", 
            "공격력", "열기 피해", "전기 피해", "냉기 피해", "자연 피해", "오리지늄 아츠 강도", "궁극기 충전 효율", "아츠 피해",
            "강공", "억제", "추격", "분쇄", "기예", "방출", "흐름", "효율"
        ])
    },
    {
        id: "zone4_originium",
        name: "4번협곡 - 오리지늄 연구 구역",
        options: new Set([
            "민첩", "힘", "의지", "지능", "주요 능력치",
            "공격력", "물리 피해", "전기 피해", "냉기 피해", "자연 피해", "치명타 확률", "궁극기 충전 효율", "아츠 피해",
            "억제", "추격", "사기", "기예", "고통", "의료", "골절", "효율"
        ])
    },
    {
        id: "zone4_mine",
        name: "4번협곡 - 광맥 구역",
        options: new Set([
            "민첩", "힘", "의지", "지능", "주요 능력치",
            "생명력", "물리 피해", "열기 피해", "냉기 피해", "자연 피해", "치명타 확률", "오리지늄 아츠 강도", "치유 효율",
            "강공", "억제", "기예", "잔혹", "고통", "방출", "어둠", "효율"
        ])
    },
    {
        id: "zone4_energy",
        name: "4번협곡 - 에너지 공급 고지",
        options: new Set([
            "민첩", "힘", "의지", "지능", "주요 능력치",
            "공격력", "생명력", "물리 피해", "열기 피해", "자연 피해", "치명타 확률", "오리지늄 아츠 강도", "치유 효율",
            "추격", "분쇄", "사기", "잔혹", "고통", "의료", "골절", "흐름"
        ])
    },
    {
        id: "mureung_castle",
        name: "무릉 - 무릉성",
        options: new Set([
            "민첩", "힘", "의지", "지능", "주요 능력치",
            "공격력", "생명력", "전기 피해", "냉기 피해", "치명타 확률", "궁극기 충전 효율", "아츠 피해", "치유 효율",
            "강공", "분쇄", "잔혹", "의료", "골절", "방출", "어둠", "흐름"
        ])
    }
];

const WEAPONS = [
    // 6 Star
    { name: "백야의 별", type: "한손검", rarity: 6, options: ["주요 능력치", "오리지늄 아츠 강도", "고통"] },
    { name: "위대한 이름", type: "한손검", rarity: 6, options: ["주요 능력치", "물리 피해", "잔혹"] },
    { name: "테르밋 커터", type: "한손검", rarity: 6, options: ["의지", "공격력", "흐름"] },
    { name: "부요", type: "한손검", rarity: 6, options: ["주요 능력치", "치명타 확률", "어둠"] },
    { name: "끝없는 방랑", type: "한손검", rarity: 6, options: ["의지", "공격력", "흐름"] },
    { name: "장대한 염원", type: "한손검", rarity: 6, options: ["민첩", "공격력", "고통"] },
    { name: "용조의 불꽃", type: "한손검", rarity: 6, options: ["지능", "공격력", "어둠"] },
    { name: "암흑의 횃불", type: "한손검", rarity: 6, options: ["지능", "열기 피해", "고통"] },
    // 5 Star
    { name: "강철의 여운", type: "한손검", rarity: 5, options: ["민첩", "물리 피해", "기예"] },
    { name: "숭배의 시선", type: "한손검", rarity: 5, options: ["민첩", "물리 피해", "어둠"] },
    { name: "O.B.J. 엣지 오브 라이트", type: "한손검", rarity: 5, options: ["민첩", "공격력", "흐름"] },
    { name: "십이문", type: "한손검", rarity: 5, options: ["민첩", "공격력", "고통"] },
    { name: "린수를 찾아서", type: "한손검", rarity: 5, options: ["힘", "궁극기 충전 효율", "억제"] },
    { name: "불사의 성주", type: "한손검", rarity: 5, options: ["지능", "궁극기 충전 효율", "사기"] },

    // 양손검 (6성)
    { name: "분쇄의 군주", type: "양손검", rarity: 6, options: ["힘", "치명타 확률", "분쇄"] },
    { name: "과거의 일품", type: "양손검", rarity: 6, options: ["의지", "생명력", "효율"] },
    { name: "모범", type: "양손검", rarity: 6, options: ["주요 능력치", "공격력", "억제"] },
    { name: "헤라펜거", type: "양손검", rarity: 6, options: ["힘", "공격력", "방출"] },
    { name: "천둥의 흔적", type: "양손검", rarity: 6, options: ["힘", "생명력", "의료"] },
    // 양손검 (5성)
    { name: "O.B.J. 헤비 버든", type: "양손검", rarity: 5, options: ["힘", "생명력", "효율"] },
    { name: "최후의 메아리", type: "양손검", rarity: 5, options: ["힘", "생명력", "의료"] },
    { name: "고대의 강줄기", type: "양손검", rarity: 5, options: ["힘", "오리지늄 아츠 강도", "잔혹"] }, // 오리지늄 아츠 강도 -> 오리지늄 아츠 강도
    { name: "검은 추적자", type: "양손검", rarity: 5, options: ["힘", "궁극기 충전 효율", "방출"] }, // 궁극기 충전 효율 -> 궁극기 충전 효율

    // 장병기 (6성)
    { name: "J.E.T.", type: "장병기", rarity: 6, options: ["주요 능력치", "공격력", "억제"] },
    { name: "용사", type: "장병기", rarity: 6, options: ["민첩", "물리 피해", "기예"] },
    { name: "산의 지배자", type: "장병기", rarity: 6, options: ["민첩", "물리 피해", "효율"] },
    // 장병기 (5성)
    { name: "중심력", type: "장병기", rarity: 5, options: ["의지", "전기 피해", "억제"] },
    { name: "O.B.J. 스파이크", type: "장병기", rarity: 5, options: ["의지", "물리 피해", "고통"] },
    { name: "키메라의 정의", type: "장병기", rarity: 5, options: ["힘", "궁극기 충전 효율", "잔혹"] }, // 궁극기 충전 효율 -> 궁극기 충전 효율

    // 권총 (6성)
    { name: "클래니벌", type: "권총", rarity: 6, options: ["주요 능력치", "아츠 피해", "고통"] },
    { name: "쐐기", type: "권총", rarity: 6, options: ["주요 능력치", "치명타 확률", "고통"] },
    { name: "예술의 폭군", type: "권총", rarity: 6, options: ["지능", "치명타 확률", "골절"] },
    { name: "항로의 개척자", type: "권총", rarity: 6, options: ["지능", "냉기 피해", "고통"] },
    // 권총 (5성)
    { name: "이성적인 작별", type: "권총", rarity: 5, options: ["힘", "열기 피해", "추격"] },
    { name: "O.B.J. 벨로시투스", type: "권총", rarity: 5, options: ["민첩", "궁극기 충전 효율", "방출"] }, // 궁극기 충전 효율 -> 궁극기 충전 효율
    { name: "작품: 중생", type: "권총", rarity: 5, options: ["민첩", "아츠 피해", "고통"] }, // 아츠 피해 증가 -> 아츠 피해

    // 아츠 유닛 (6성)
    { name: "기사도 정신", type: "아츠 유닛", rarity: 6, options: ["의지", "생명력", "의료"] }, // 최대 생명력 -> 생명력
    { name: "망각", type: "아츠 유닛", rarity: 6, options: ["지능", "아츠 피해", "어둠"] },
    { name: "폭발 유닛", type: "아츠 유닛", rarity: 6, options: ["주요 능력치", "오리지늄 아츠 강도", "방출"] }, // 오리지늄 아츠 강도 -> 오리지늄 아츠 강도
    { name: "바다와 별의 꿈", type: "아츠 유닛", rarity: 6, options: ["지능", "치유 효율", "고통"] },
    { name: "사명의 길", type: "아츠 유닛", rarity: 6, options: ["의지", "궁극기 충전 효율", "추격"] }, // 궁극기 충전 효율 -> 궁극기 충전 효율
    { name: "작품: 침식 흔적", type: "아츠 유닛", rarity: 6, options: ["의지", "자연 피해", "억제"] },
    // 아츠 유닛 (5성)
    { name: "O.B.J. 아츠 아이덴티티", type: "아츠 유닛", rarity: 5, options: ["지능", "오리지늄 아츠 강도", "추격"] }, // 오리지늄 아츠 강도 -> 오리지늄 아츠 강도
    { name: "선교의 자유", type: "아츠 유닛", rarity: 5, options: ["의지", "치유 효율", "의료"] },
    { name: "황무지의 방랑자", type: "아츠 유닛", rarity: 5, options: ["지능", "전기 피해", "고통"] },
    { name: "무가내하", type: "아츠 유닛", rarity: 5, options: ["의지", "궁극기 충전 효율", "사기"] }, // 궁극기 충전 효율 -> 궁극기 충전 효율
    { name: "망자의 노래", type: "아츠 유닛", rarity: 5, options: ["지능", "공격력", "어둠"] },
];

// Weapon Types
const WEAPON_TYPES = ["전체", "한손검", "양손검", "장병기", "권총", "아츠 유닛"];

// State
let selectedWeapons = [];
let currentTypeFilter = "전체";
let currentSearchQuery = "";


// DOM Elements
const weaponListEl = document.getElementById('weapon-list');
const selectedWeaponsDisplayEl = document.getElementById('selected-weapons-display');
const selectedCountEl = document.getElementById('selected-count');
const analyzeBtn = document.getElementById('analyze-btn');
const resetBtn = document.getElementById('reset-btn');
const resultsSection = document.getElementById('results-section');
const resultsContainer = document.getElementById('results-container');
const searchInput = document.getElementById('search-input');
const typeTabsEl = document.getElementById('type-tabs');

// Initialization
function init() {
    renderTypeTabs();
    renderWeaponList();
    updateUI();
    
    analyzeBtn.addEventListener('click', analyze);
    resetBtn.addEventListener('click', resetSelection);
    searchInput.addEventListener('input', (e) => {
        currentSearchQuery = e.target.value.toLowerCase();
        renderWeaponList();
    });
}

function renderTypeTabs() {
    typeTabsEl.innerHTML = '';
    WEAPON_TYPES.forEach(type => {
        const btn = document.createElement('button');
        btn.className = `tab-btn ${type === currentTypeFilter ? 'active' : ''}`;
        btn.textContent = type;
        btn.onclick = () => {
            currentTypeFilter = type;
            // Update active state
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderWeaponList();
        };
        typeTabsEl.appendChild(btn);
    });
}

// Render Functions
function renderWeaponList() {
    weaponListEl.innerHTML = '';
    
    // Create an array with original index to maintain reference
    const filteredWeapons = WEAPONS.map((weapon, index) => ({ weapon, index }))
        .filter(item => {
            // Always show selected weapons regardless of filters
            if (selectedWeapons.includes(item.index)) return true;

            if (currentTypeFilter !== "전체" && item.weapon.type !== currentTypeFilter) return false;
            if (currentSearchQuery && !item.weapon.name.toLowerCase().includes(currentSearchQuery)) return false;
            return true;
        })
        .sort((a, b) => {
            // Sort by Selection (Selected First)
            const aSelected = selectedWeapons.includes(a.index);
            const bSelected = selectedWeapons.includes(b.index);
            if (aSelected && !bSelected) return -1;
            if (!aSelected && bSelected) return 1;

            // Sort by Rarity Descending
            if (b.weapon.rarity !== a.weapon.rarity) {
                return b.weapon.rarity - a.weapon.rarity;
            }
            // Then by Name (optional, useful for stability)
            return a.weapon.name.localeCompare(b.weapon.name);
        });

    filteredWeapons.forEach(item => {
        const { weapon, index } = item;

        const card = document.createElement('div');
        // Add rarity class directly to card for styling hooks
        card.className = `weapon-card rarity-${weapon.rarity}-card`; 
        card.dataset.index = index;
        card.onclick = () => toggleSelection(index);
        
        // Icon based structure
        card.innerHTML = `
            <div class="weapon-icon-wrapper rarity-bg-${weapon.rarity}">
                <div class="weapon-icon-inner">
                    <!-- Placeholder SVG for Sword -->
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M14.5 17.5L3 6V3h3l11.5 11.5"></path>
                        <path d="M13 19l6-6"></path>
                        <path d="M16 16l4 4"></path>
                        <path d="M19 21l2-2"></path>
                    </svg>
                </div>
                <div class="rarity-badge">${weapon.rarity}성</div>
            </div>
            <div class="weapon-info">
                <span class="weapon-name">${weapon.name}</span>
                <div class="weapon-options-mini">
                    ${weapon.options.map(opt => `<span>${opt}</span>`).join('')}
                </div>
            </div>
            <div class="selected-overlay">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            </div>
        `;
        
        weaponListEl.appendChild(card);
    });
    
    // Empty State Message
    if (weaponListEl.children.length === 0) {
        weaponListEl.innerHTML = `<div class="empty-message">검색 결과가 없습니다.</div>`;
    }

    updateUI(); // Re-apply selection state after rendering
}

function updateUI() {
    // Update count
    selectedCountEl.textContent = selectedWeapons.length;
    
    // Update list styling
    document.querySelectorAll('.weapon-card').forEach(card => {
        const index = parseInt(card.dataset.index);
        const isSelected = selectedWeapons.includes(index);
        
        if (isSelected) {
            card.classList.add('selected');
        } else {
            card.classList.remove('selected');
        }
        card.classList.remove('disabled'); // Always enabled
    });
    
    // Update selected summary
    selectedWeaponsDisplayEl.innerHTML = '';
    selectedWeapons.forEach(index => {
        const weapon = WEAPONS[index];
        const tag = document.createElement('div');
        tag.className = 'selected-tag';
        tag.textContent = weapon.name;
        tag.onclick = () => toggleSelection(index);
        tag.style.cursor = 'pointer';
        selectedWeaponsDisplayEl.appendChild(tag);
    });
    
    // Enable/Disable Analyze Button
    analyzeBtn.disabled = selectedWeapons.length === 0;
}

// Logic Functions
function toggleSelection(index) {
    if (selectedWeapons.includes(index)) {
        selectedWeapons = selectedWeapons.filter(i => i !== index);
    } else {
        selectedWeapons.push(index);
    }
    updateUI();
    resultsSection.classList.add('hidden'); // Hide results on change
}

function resetSelection() {
    selectedWeapons = [];
    updateUI();
    resultsSection.classList.add('hidden');
}

function analyze() {
    if (selectedWeapons.length === 0) return;
    
    const results = ZONES.map(zone => {
        const satisfiedWeapons = [];
        const unsatisfiedWeapons = [];
        
        selectedWeapons.forEach(wIndex => {
            const weapon = WEAPONS[wIndex];
            const missingOptions = weapon.options.filter(opt => !zone.options.has(opt));
            
            if (missingOptions.length === 0) {
                satisfiedWeapons.push(weapon);
            } else {
                unsatisfiedWeapons.push({
                    weapon: weapon,
                    missing: missingOptions
                });
            }
        });
        
        return {
            zone: zone,
            score: satisfiedWeapons.length,
            satisfied: satisfiedWeapons,
            unsatisfied: unsatisfiedWeapons
        };
    });
    
    // Sort results: Higher score first
    results.sort((a, b) => b.score - a.score);
    
    renderResults(results);
}

function renderResults(results) {
    resultsContainer.innerHTML = '';
    resultsSection.classList.remove('hidden');
    
    // Group by Score
    // We want to show distinct groups if desired, or just list them.
    // Let's just list them, but visually distinguish "Perfect for all selected" vs "Partial".
    
    if (results[0].score === 0) {
        resultsContainer.innerHTML = '<p class="no-result-message">선택한 무기의 종결 기질을 얻을 수 있는 지역이 없습니다.</p>';
        return;
    }

    results.forEach(result => {
        if (result.score === 0) return; // Don't show zones that help nobody
        
        const card = document.createElement('div');
        const isPerfect = result.unsatisfied.length === 0;
        const matchClass = isPerfect ? 'perfect-match' : 'partial-match';
        
        card.className = `zone-card ${matchClass}`;
        
        let content = `
            <div class="zone-header">
                <span class="zone-name">${result.zone.name}</span>
                <span class="zone-score">${result.score} / ${selectedWeapons.length} 무기 유효</span>
            </div>
            <div class="match-details">
        `;
        
        // Satisfied List
        if (result.satisfied.length > 0) {
            const satisfiedHtml = result.satisfied.map(w => {
                // Categorize options
                const categorized = {
                    "기초 속성": [],
                    "추가 속성": [],
                    "스킬 속성": []
                };

                w.options.forEach(opt => {
                    for (const [cat, list] of Object.entries(OPTION_CATEGORIES)) {
                        if (list.includes(opt)) {
                            categorized[cat].push(opt);
                            break;
                        }
                    }
                });

                // Build HTML for categorized options
                let optionsHtml = '';
                for (const [cat, opts] of Object.entries(categorized)) {
                    if (opts.length > 0) {
                        optionsHtml += `
                            <div class="option-category">
                                <span class="category-label">${cat}:</span>
                                <span class="category-values">${opts.join(', ')}</span>
                            </div>
                        `;
                    }
                }

                return `
                <div class="satisfied-weapon-row">
                    <div class="weapon-cylinder rarity-${w.rarity}">${w.name}</div>
                    <div class="weapon-valid-options">
                        ${optionsHtml}
                    </div>
                </div>`;
            }).join('');
            
            content += `<div class="match-item match-success">
                <div class="result-label">가능 (종결 파밍 가능):</div>
                <div class="result-weapon-list vertical">${satisfiedHtml}</div>
            </div>`;
        }
        
        // Unsatisfied List
        if (result.unsatisfied.length > 0) {
            const unsatisfiedHtml = result.unsatisfied.map(item => 
                `<div class="unsatisfied-row">
                    <span class="weapon-cylinder rarity-${item.weapon.rarity} unsatisfied">${item.weapon.name}</span>
                    <span class="missing-text">[${item.missing.join(', ')}] 누락</span>
                </div>`
            ).join('');

            content += `<div class="match-item match-fail">
                <div class="result-label">불가능 (누락 옵션):</div>
                <div class="result-weapon-list vertical">${unsatisfiedHtml}</div>
            </div>`;
        }
        
        content += `</div>`; // Close details
        card.innerHTML = content;
        resultsContainer.appendChild(card);
    });

    resultsContainer.scrollIntoView({ behavior: 'smooth' });
}


// --- Gizil Analyzer Logic ---

function initAnalyzer() {
    // Populate Dropdowns
    const baseSelect = document.getElementById('base-attr');
    const extraSelect = document.getElementById('extra-attr');
    const skillSelect = document.getElementById('skill-attr');

    // Populate Base Attributes
    OPTION_CATEGORIES["기초 속성"].forEach(opt => {
        const option = document.createElement('option');
        option.value = opt;
        option.textContent = opt;
        baseSelect.appendChild(option);
    });

    // Populate Extra Attributes
    OPTION_CATEGORIES["추가 속성"].forEach(opt => {
        const option = document.createElement('option');
        option.value = opt;
        option.textContent = opt;
        extraSelect.appendChild(option);
    });

    // Populate Skill Attributes
    OPTION_CATEGORIES["스킬 속성"].forEach(opt => {
        const option = document.createElement('option');
        option.value = opt;
        option.textContent = opt;
        skillSelect.appendChild(option);
    });

    // Navigation Logic
    document.getElementById('nav-farming').addEventListener('click', () => {
        switchTab('farming');
    });

    document.getElementById('nav-analyzer').addEventListener('click', () => {
        switchTab('analyzer');
    });

    // Analysis Logic
    document.getElementById('run-analysis-btn').addEventListener('click', runGizilAnalysis);
    document.getElementById('reset-analyzer-btn').addEventListener('click', resetAnalyzer);
}

function switchTab(tabName) {
    const farmingSection = document.getElementById('farming-calculator');
    const analyzerSection = document.getElementById('gizil-analyzer');
    const navFarming = document.getElementById('nav-farming');
    const navAnalyzer = document.getElementById('nav-analyzer');

    if (tabName === 'farming') {
        farmingSection.classList.remove('hidden');
        analyzerSection.classList.add('hidden');
        navFarming.classList.add('active');
        navAnalyzer.classList.remove('active');
    } else {
        farmingSection.classList.add('hidden');
        analyzerSection.classList.remove('hidden');
        navFarming.classList.remove('active');
        navAnalyzer.classList.add('active');
    }
}

function resetAnalyzer() {
    document.getElementById('base-attr').value = '';
    document.getElementById('extra-attr').value = '';
    document.getElementById('skill-attr').value = '';
    document.getElementById('analyzer-results').classList.add('hidden');
    document.getElementById('analyzer-results-list').innerHTML = '';
    document.getElementById('perfect-match-count').textContent = '(0)';
}

function runGizilAnalysis() {
    const baseVal = document.getElementById('base-attr').value;
    const extraVal = document.getElementById('extra-attr').value;
    const skillVal = document.getElementById('skill-attr').value;

    if (!baseVal && !extraVal && !skillVal) {
        alert("최소한 하나의 속성을 선택해주세요.");
        return;
    }

    const inputOptions = [baseVal, extraVal, skillVal].filter(val => val !== "");
    
    // Group matches by count
    const matches = {
        3: [],
        2: [],
        1: []
    };

    WEAPONS.forEach(weapon => {
        const weaponOptions = new Set(weapon.options);
        // Count how many input options are present in the weapon's options
        const matchCount = inputOptions.reduce((count, opt) => count + (weaponOptions.has(opt) ? 1 : 0), 0);
        
        if (matches[matchCount]) {
            matches[matchCount].push(weapon);
        }
    });

    renderAnalyzerResults(matches, inputOptions);
}

function renderAnalyzerResults(matches, inputOptions) {
    const container = document.getElementById('analyzer-results-list');
    const resultSection = document.getElementById('analyzer-results');
    const countSpan = document.getElementById('perfect-match-count');

    container.innerHTML = '';
    const totalMatches = matches[3].length + matches[2].length + matches[1].length;
    countSpan.textContent = `(${totalMatches})`;
    resultSection.classList.remove('hidden');

    if (totalMatches === 0) {
        container.innerHTML = '<p style="text-align:center; grid-column: 1/-1; color: #888;">일치하는 무기가 없습니다.</p>';
        return;
    }

    // Helper to render sections
    const renderSection = (title, weaponList, titleClass = '') => {
        if (weaponList.length === 0) return;

        const sectionHeader = document.createElement('h4');
        sectionHeader.textContent = `${title} (${weaponList.length})`;
        sectionHeader.className = `result-group-header ${titleClass}`;
        sectionHeader.style.gridColumn = '1 / -1';
        sectionHeader.style.marginTop = '1.5rem';
        sectionHeader.style.marginBottom = '0.5rem';
        sectionHeader.style.borderBottom = '1px solid #444';
        sectionHeader.style.paddingBottom = '0.5rem';
        container.appendChild(sectionHeader);

        weaponList.forEach(w => {
            // Highlight matching options
            let optionsHtml = '';
            
            // Categorize weapon options for display
            const categories = {
                "기초 속성": [],
                "추가 속성": [],
                "스킬 속성": []
            };

            w.options.forEach(opt => {
                for (const [catName, catOpts] of Object.entries(OPTION_CATEGORIES)) {
                    if (catOpts.includes(opt)) {
                        categories[catName].push(opt);
                        break;
                    }
                }
            });

            // Generate HTML for options with highlight
            for (const [cat, opts] of Object.entries(categories)) {
                if (opts.length > 0) {
                    // Highlight matched options
                    const highlightedOpts = opts.map(opt => {
                        if (inputOptions.includes(opt)) {
                            return `<span style="color: var(--success-color); font-weight: bold; text-shadow: 0 0 5px rgba(76, 175, 80, 0.3);">${opt}</span>`;
                        }
                        // Non-matching valid options: distinct color (muted gray to indicate missing)
                        return `<span style="color: #999;">${opt}</span>`;
                    });

                    optionsHtml += `
                        <div class="option-category">
                            <span class="category-label">${cat}:</span>
                            <span class="category-values">${highlightedOpts.join(', ')}</span>
                        </div>
                    `;
                }
            }

            const weaponCard = document.createElement('div');
            // Use existing styles but ensure it looks like a card
            weaponCard.className = 'satisfied-weapon-row'; 
            weaponCard.style.cssText = 'display: flex; flex-direction: column; background: rgba(255,255,255,0.05); padding: 1rem; border-radius: 4px; border: 1px solid #444;';
            
            weaponCard.innerHTML = `
                <div class="weapon-cylinder rarity-${w.rarity}" style="margin-bottom: 0.5rem; align-self: flex-start;">${w.name}</div>
                <div class="weapon-valid-options">
                    ${optionsHtml}
                </div>
            `;
            
            container.appendChild(weaponCard);
        });
    };

    // Render grouped results
    if (matches[3].length > 0) {
        renderSection('🔥 3옵션 일치 (완벽)', matches[3], 'text-perfect');
    }
    if (matches[2].length > 0) {
        renderSection('✨ 2옵션 일치', matches[2], 'text-high');
    }
    if (matches[1].length > 0) {
        renderSection('🔹 1옵션 일치', matches[1], 'text-normal');
    }
}

// Start
init();
initAnalyzer();

