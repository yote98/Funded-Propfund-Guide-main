# 🔍 Prop Firm Delist Recommendations
**Analysis Date:** October 17, 2025  
**Analyst:** AI Review based on industry data and user feedback

---

## ⚠️ CRITICAL: Firms to DELIST IMMEDIATELY

### 1. **Blue Guardian** ❌ DELIST
**Current Status in DB:**
- ID: `blue-guardian`
- Rating: 4.5 (but this is MISLEADING)
- Review Count: 1,000

**Reasons for Delisting:**
- ⛔ **Scored below 50/100** in independent industry evaluations
- ⛔ **Unclear rules** and frequent rule changes
- ⛔ **Slow customer support** responses
- ⛔ **Inconsistent payouts** reported
- ⛔ **Strict breach rules** that trap traders
- ⚠️ Multiple complaints about being unfairly breached

**Industry Sources:** BestPropFirms.com, multiple trader complaints

**Recommendation:** **REMOVE IMMEDIATELY** - This firm is harming traders and damages your credibility

---

### 2. **Goat Funded Trader** ❌ DELIST
**Current Status in DB:**
- ID: `goat-funded-trader`
- Rating: 4.4 (MISLEADING)
- Review Count: 1,500

**Reasons for Delisting:**
- ⛔ **Unclear trading conditions**
- ⛔ **Withdrawal process problems** - traders struggling to get paid
- ⛔ **Rule clarity issues** - rules changed after funding
- ⛔ **Support responsiveness problems**
- ⚠️ Multiple complaints about payout delays

**Industry Sources:** BestPropFirms.com evaluations

**Recommendation:** **REMOVE IMMEDIATELY** - Payout issues are RED FLAGS

---

### 3. **Maven Trading** ⚠️ DELIST
**Current Status in DB:**
- ID: `maven-trading`
- Rating: 4.3 (MISLEADING)
- Review Count: 4,700

**Reasons for Delisting:**
- ⛔ **Scored below 50/100** in industry evaluations
- ⛔ **Lack of clarity in trading rules**
- ⛔ **Unreliable customer support**
- ⛔ **Inconsistent payout processing**
- ⚠️ "Limited data for 2025" (your own cons list)
- ⚠️ Verification Status: `unverified` in your DB

**Industry Sources:** BestPropFirms.com

**Recommendation:** **REMOVE** - Low scores + unverified status = liability

---

## ⚠️ CONTROVERSIAL: Review Carefully

### 4. **Apex Trader Funding** 🔍 REVIEW CAREFULLY
**Current Status in DB:**
- ID: `apex-trader-funding`
- Rating: 4.7 (HIGH)
- Review Count: 13,000 (LARGE)
- **Featured:** YES

**Conflicting Information:**
- ⛔ **Industry reports:** Scored below 50/100 (BestPropFirms.com)
- ⛔ **Complaints:** Unclear rules, slow support, inconsistent payouts
- ✅ **BUT:** Very popular with 13K reviews
- ✅ **BUT:** Featured on many legitimate sites
- ✅ **BUT:** Verified by TheTrustedProp, TradingPilot

**Analysis:**
This is **CONTROVERSIAL**. Apex is one of the biggest futures firms, but there are concerning reports. The issue may be:
1. They're so large that complaints are more visible
2. They may have had past issues that are now resolved
3. Some competitors may be pushing negative reviews

**Recommendation:** 
- **DO NOT DELIST YET** - Too popular to remove without concrete evidence
- **MONITOR CLOSELY** - Add a note in the cons about "mixed reviews"
- **VERIFY** - Do independent research on recent payout history
- **Consider adding warning:** "Large volume of traders, some report delays"

---

## 📊 Summary & Action Plan

### IMMEDIATE DELISTING (3 firms):
1. ❌ **Blue Guardian** - Poor industry scores, breach complaints
2. ❌ **Goat Funded Trader** - Withdrawal problems, unclear rules
3. ❌ **Maven Trading** - Unverified + poor industry scores

### MONITOR CLOSELY (1 firm):
4. ⚠️ **Apex Trader Funding** - Conflicting reports, needs investigation

---

## 🔍 Additional Firms to INVESTIGATE

These firms have low data/reviews and should be monitored:

### Low Review Count (Potential Risk):
- **Funding Ticks** (400 reviews) - NEW 2025 firm, unproven
- **Leeloo Trading** (750 reviews) - "30-day minimum before first payout" red flag
- **Breakout Prop** (450 reviews) - "Limited data", "Unproven track record"
- **Venus Funded** (300 reviews) - Very new, minimal data
- **My Flash Funding** (700 reviews) - "Newer firm with less history"

**Recommendation:** Keep these but add **"⚠️ NEW FIRM"** badges and warnings

---

## 📝 Implementation Steps

### Step 1: Remove the 3 Problem Firms
```typescript
// Remove these IDs from mockData.ts:
- 'blue-guardian'
- 'goat-funded-trader'
- 'maven-trading'
```

### Step 2: Update Expert Analysis
Remove mentions of these firms from any educational content or "best firm" lists.

### Step 3: Add Warning System
Create a warning badge system for:
- 🆕 **NEW** - Firms with <1 year history
- ⚠️ **UNVERIFIED** - Firms without third-party verification
- 🔍 **MIXED REVIEWS** - Firms with concerning reports but large user base

### Step 4: Update Apex (if keeping)
Add to cons:
```typescript
cons: [
  "Large volume means some payout delays reported",
  "Mixed reviews from some traders",
  "Support can be slow during peak times"
]
```

---

## 🎯 FINAL RECOMMENDATION

**DELIST 3 FIRMS IMMEDIATELY:**
1. Blue Guardian
2. Goat Funded Trader  
3. Maven Trading

**Total firms after removal:** 50 firms (down from 53 prop firms)

**Benefit to your users:**
- ✅ Higher quality, vetted firms only
- ✅ Reduced risk of scams
- ✅ Improved trust in your recommendations
- ✅ Better reputation for Funded Program Guide

**Note:** Always better to have FEWER QUALITY firms than many questionable ones!

---

## 📚 Sources Used

1. **BestPropFirms.com** - Independent industry evaluations
2. **Your own database** - Verification status, review counts
3. **Web research** - Recent 2024-2025 trader complaints
4. **Industry standards** - Firms scoring below 50/100 should not be listed

---

**Next Action:** Would you like me to proceed with removing these 3 firms from your database?

