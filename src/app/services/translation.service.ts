import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private languageSubject = new BehaviorSubject<'de' | 'en'>('en');
  language$ = this.languageSubject.asObservable();
  currentLanguage = 'en';

  private translations: Record<string, any> = {
    en: {
      hero: {
        greeting: "Hello there! I'm",
        title: 'Frontend Developer',
        contact: 'Get in Touch',
      },
      menu: {
        aboutMe: 'About Me',
        skillset: 'Skillset',
        portfolio: 'Portfolio',
        references: 'References',
        contactMe: 'Contact me',
      },
      aboutMe: {
        headline: 'About Me',
        text: "Hey there, I'm Tobias. Write some information about yourself that is IT related. Why are you passionate about coding? What is your source of inspiration for improving your programming skills? Do you learn from each challenge as you search for the most efficient or elegant solution? Let's connect and create something amazing together!",
        button: "Let's Talk",
        hiddenMenu: {
          headline: 'More about me',
          first: 'Team player',
          second: 'Continuosly learning',
          third: 'Creative Thinker',
          thourth: 'Based in Saxony-Anhalt',
          fifth: 'Open to work remote',
          sixth: 'Open to relocate',
        },
      },
    },
    de: {
      hero: {
        greeting: 'Hallo, ich bin',
        title: 'Frontend-Entwickler',
        contact: 'Kontakt aufnehmen',
      },
      menu: {
        aboutMe: 'Über mich',
        skillset: 'Fähigkeiten',
        portfolio: 'Portfolio',
        references: 'Referenzen',
        contactMe: 'Kontakt aufnehmen',
      },
      aboutMe: {
        headline: 'Über mich',
        text: 'bla bla bla',
        button: 'Zeit für ein Gespräch',
        hiddenMenu: {
          headline: 'Mehr über mich',
          first: 'Teamplayer',
          second: 'Stetig lernend',
          third: 'Kreativer Denker',
          thourth: 'Ansässig in Sachsen-Anhalt',
          fifth: 'Offen für Remote-Arbeit',
          sixth: 'Offen für einen Umzug',
        },
      },
    },
  };

  translate(key: string): string {
    const keys = key.split('.'); // Zerlege 'menu.aboutMe' in ['menu', 'aboutMe']
    let translation = this.translations[this.currentLanguage];

    for (const k of keys) {
      if (translation[k] !== undefined) {
        translation = translation[k];
      } else {
        console.warn(`Missing translation for key: ${key}`);
        return key;
      }
    }

    return translation;
  }

  switchLanguage(lang: 'de' | 'en') {
    this.languageSubject.next(lang);
    this.currentLanguage = lang;
  }
}
