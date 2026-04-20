איך לערוך ולשמור פרויקט שרץ על שרת מרוחק של גיטהאב

1. פתיחת הקוד ושינוי
2. פתיחת טרמינל אפשר גם ה VS code  בדיקת אם יש שינויים – git status
3.הוספת כל השינויים – git add .
4.הודעה – git commit -m " something" 
5.העלה (דחיפה) – git push origin <name of the branch> 
*במקרה של פרויקט פורטפוליו – git push origin ghpages
6. לאחר מכן ביצוע השינויים – npm run deploy 
במידה ומשהו לא תקין יש לעשות לפני npm run build  ולאחר מכן שוב npm run deploy


npm run build
npm run deploy




if sync doesnt work work 
git reset --hard gh-pages
git push origin gh-pages --force






---

## הרצה לוקאלית לפני PUSH

⚠️ חובה `cd personal-portfolio` קודם. אחרת → `ENOENT package.json`.

```bash
cd personal-portfolio
npm install      # פעם ראשונה בלבד
npm start        # http://localhost:3000
npm run build    # בדיקה שה-build עובר
```

**לפני push:** אין `console.error`, אין horizontal scroll, `npm run build` עובר.

פורט תפוס: `set PORT=3001 && npm start`
