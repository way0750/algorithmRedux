/**
 * @param {string[][]} accounts
 * @return {string[][]}
 what is a node
 how to recorde parent info

email: email

 */
var accountsMerge = function(accounts) {
    const parents = {} // { email: email }
    const emailToName = {};
    for (let [name, ...emails] of accounts) {
        for (let email of emails) {
            parents[email] = email;
            emailToName[email] = name;
        }
    }

    const getParent = (email) => {
        if (parents[email] !== email) {
            parents[email] = getParent(parents[email]);
        }
        return parents[email];
    }

    const makeUnion = (emailA, emailB) => {
        const emailAParent = getParent(emailA);
        const emailBParent = getParent(emailB);
        // if parent is the same, no need to do anything
        // if not the same, then change emailB's root parent to emailA itself
        if (emailAParent !== emailBParent) {
            parents[emailBParent] = emailAParent;
        }
    }

    for (let [_, emailA, ...emailBs] of accounts) {
        for (let emailB of emailBs) {
            makeUnion(emailA, emailB);
        }
    }

    const groups = {} // {email: [name, emails...]}
    for (let email in parents) {
        const parent = getParent(email);
        if (!groups[parent]) groups[parent] = [];
        groups[parent].push(email);
    }

    const ans = [];
    for (let [parent, emails] of Object.entries(groups)) {
        ans.push([emailToName[parent], ...emails.sort()])
    }
    return ans;
};