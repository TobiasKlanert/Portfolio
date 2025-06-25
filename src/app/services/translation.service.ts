import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import translationsJson from '../../assets/translations.json';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private languageSubject = new BehaviorSubject<'de' | 'en'>('en');
  language$ = this.languageSubject.asObservable();
  currentLanguage = 'de';

  private translations: Record<string, any> = translationsJson

  translate(key: string): string {
    const keys = key.split('.');
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
