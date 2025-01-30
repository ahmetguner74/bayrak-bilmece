import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Country, Difficulty } from '../types';
import { allCountries } from '../data/allCountries';
import { api } from '../services/api'; // veya firebase

const AdminPanel: React.FC = () => {
  const navigate = useNavigate();
  
  // Başlangıçta localStorage'dan veya allCountries'den veri al
  const getInitialCountries = () => {
    const savedCountries = localStorage.getItem('countries');
    return savedCountries ? JSON.parse(savedCountries) : allCountries;
  };

  const [countryList, setCountryList] = useState<Country[]>(getInitialCountries());
  const [filteredList, setFilteredList] = useState<Country[]>(getInitialCountries());
  const [editingCountry, setEditingCountry] = useState<Country | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<'all' | 'Kolay' | 'Orta' | 'Zor'>('all');
  const [sortField, setSortField] = useState<string>('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [missingFlags, setMissingFlags] = useState<string[]>([]);
  const [extraFlags, setExtraFlags] = useState<string[]>([]);

  useEffect(() => {
    const loadCountries = async () => {
      try {
        const countries = await api.getCountries();
        setCountryList(countries);
        setFilteredList(countries);
      } catch (error) {
        console.error('Veriler yüklenemedi:', error);
        // Hata durumunda varsayılan verileri kullan
        setCountryList(allCountries);
        setFilteredList(allCountries);
      }
    };
    
    loadCountries();
  }, []);

  useEffect(() => {
    let filtered = countryList;
    
    if (searchTerm) {
      filtered = filtered.filter(country => 
        country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        country.capital.toLowerCase().includes(searchTerm.toLowerCase()) ||
        country.code.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (difficultyFilter !== 'all') {
      filtered = filtered.filter(country => country.difficulty === difficultyFilter);
    }

    setFilteredList(filtered);
  }, [searchTerm, difficultyFilter, countryList]);

  const handleEdit = (country: Country) => {
    setEditingCountry(country);
  };

  // Değişiklikleri kaydet
  const saveChanges = async (updatedList: Country[]) => {
    try {
      await api.updateCountries(updatedList);
      setCountryList(updatedList);
      setFilteredList(updatedList);
    } catch (error) {
      console.error('Değişiklikler kaydedilemedi:', error);
      alert('Değişiklikler kaydedilemedi!');
    }
  };

  const handleSave = (updatedCountry: Country) => {
    if (editingCountry?.id) {
      // Düzenleme
      const updatedList = countryList.map(c => 
        c.id === updatedCountry.id ? updatedCountry : c
      );
      saveChanges(updatedList);
    } else {
      // Yeni ekleme
      const newCountry = {
        ...updatedCountry,
        id: String(countryList.length + 1)
      };
      const updatedList = [...countryList, newCountry];
      saveChanges(updatedList);
    }
    setEditingCountry(null);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Bu ülkeyi silmek istediğinizden emin misiniz?')) {
      const updatedList = countryList.filter(c => c.id !== id);
      saveChanges(updatedList);
    }
  };

  const handleSort = (field: string) => {
    if (sortField === field) {
      // Aynı alana tekrar tıklanırsa yönü değiştir
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      // Farklı alan seçilirse varsayılan olarak artan sırala
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const getSortedList = () => {
    if (!sortField) return filteredList;

    return [...filteredList].sort((a, b) => {
      let aValue = a[sortField as keyof typeof a];
      let bValue = b[sortField as keyof typeof b];

      // ID alanı için özel karşılaştırma
      if (sortField === 'id') {
        return sortDirection === 'asc' 
          ? Number(aValue) - Number(bValue)
          : Number(bValue) - Number(aValue);
      }

      // Diğer alanlar için string karşılaştırma
      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = (bValue as string).toLowerCase();
      }

      if (sortDirection === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
  };

  // Eksik ve fazla bayrakları kontrol eden fonksiyon
  const checkFlags = () => {
    try {
      // Veritabanındaki ülke kodları
      const dbCodes = new Set(countryList.map(country => country.code));
      
      // Bayrak klasöründeki dosyaları kontrol et
      const flagFiles = [
        'ad.png', 'ae.png', 'af.png', 'ag.png', 'ai.png', 'al.png', 'am.png', 'ao.png', 'aq.png', 'ar.png',
        'as.png', 'at.png', 'au.png', 'aw.png', 'ax.png', 'az.png', 'ba.png', 'bb.png', 'bd.png', 'be.png',
        'bf.png', 'bg.png', 'bh.png', 'bi.png', 'bj.png', 'bl.png', 'bm.png', 'bn.png', 'bo.png', 'bq.png',
        'br.png', 'bs.png', 'bt.png', 'bv.png', 'bw.png', 'by.png', 'bz.png', 'ca.png', 'cc.png', 'cd.png',
        'cf.png', 'cg.png', 'ch.png', 'ci.png', 'ck.png', 'cl.png', 'cm.png', 'cn.png', 'co.png', 'cr.png',
        'cu.png', 'cv.png', 'cw.png', 'cx.png', 'cy.png', 'cz.png', 'de.png', 'dj.png', 'dk.png', 'dm.png',
        'do.png', 'dz.png', 'ec.png', 'ee.png', 'eg.png', 'eh.png', 'er.png', 'es.png', 'et.png', 'fi.png',
        'fj.png', 'fk.png', 'fm.png', 'fo.png', 'fr.png', 'ga.png', 'gb-eng.png', 'gb-nir.png', 'gb-sct.png',
        'gb-wls.png', 'gb.png', 'gd.png', 'ge.png', 'gf.png', 'gg.png', 'gh.png', 'gi.png', 'gl.png', 'gm.png',
        'gn.png', 'gp.png', 'gq.png', 'gr.png', 'gs.png', 'gt.png', 'gu.png', 'gw.png', 'gy.png', 'hk.png',
        'hm.png', 'hn.png', 'hr.png', 'ht.png', 'hu.png', 'id.png', 'ie.png', 'il.png', 'im.png', 'in.png',
        'io.png', 'iq.png', 'ir.png', 'is.png', 'it.png', 'je.png', 'jm.png', 'jo.png', 'jp.png', 'ke.png',
        'kg.png', 'kh.png', 'ki.png', 'km.png', 'kn.png', 'kp.png', 'kr.png', 'kw.png', 'ky.png', 'kz.png',
        'la.png', 'lb.png', 'lc.png', 'li.png', 'lk.png', 'lr.png', 'ls.png', 'lt.png', 'lu.png', 'lv.png',
        'ly.png', 'ma.png', 'mc.png', 'md.png', 'me.png', 'mf.png', 'mg.png', 'mh.png', 'mk.png', 'ml.png',
        'mm.png', 'mn.png', 'mo.png', 'mp.png', 'mq.png', 'mr.png', 'ms.png', 'mt.png', 'mu.png', 'mv.png',
        'mw.png', 'mx.png', 'my.png', 'mz.png', 'na.png', 'nc.png', 'ne.png', 'nf.png', 'ng.png', 'ni.png',
        'nl.png', 'no.png', 'np.png', 'nr.png', 'nu.png', 'nz.png', 'om.png', 'pa.png', 'pe.png', 'pf.png',
        'pg.png', 'ph.png', 'pk.png', 'pl.png', 'pm.png', 'pn.png', 'pr.png', 'ps.png', 'pt.png', 'pw.png',
        'py.png', 'qa.png', 're.png', 'ro.png', 'rs.png', 'ru.png', 'rw.png', 'sa.png', 'sb.png', 'sc.png',
        'sd.png', 'se.png', 'sg.png', 'sh.png', 'si.png', 'sj.png', 'sk.png', 'sl.png', 'sm.png', 'sn.png',
        'so.png', 'sr.png', 'ss.png', 'st.png', 'sv.png', 'sx.png', 'sy.png', 'sz.png', 'tc.png', 'td.png',
        'tf.png', 'tg.png', 'th.png', 'tj.png', 'tk.png', 'tl.png', 'tm.png', 'tn.png', 'to.png', 'tr.png',
        'tt.png', 'tv.png', 'tw.png', 'tz.png', 'ua.png', 'ug.png', 'um.png', 'us.png', 'uy.png', 'uz.png',
        'va.png', 'vc.png', 've.png', 'vg.png', 'vi.png', 'vn.png', 'vu.png', 'wf.png', 'ws.png', 'xk.png',
        'ye.png', 'yt.png', 'za.png', 'zm.png', 'zw.png'
      ];
      
      const flagCodes = new Set(flagFiles.map(file => file.replace('.png', '')));
      
      // Veritabanında olup bayrak klasöründe olmayan ülkeler
      const missing = Array.from(dbCodes).filter(code => !flagCodes.has(code));
      
      // Bayrak klasöründe olup veritabanında olmayan ülkeler
      const extra = Array.from<string>(flagCodes).filter(code => !dbCodes.has(code));
      
      setMissingFlags(missing);
      setExtraFlags(extra);
    } catch (error) {
      console.error('Bayrak kontrolü sırasında hata:', error);
      alert('Bayraklar kontrol edilirken bir hata oluştu');
    }
  };

  // Sıfırlama butonu ekleyelim
  const handleReset = async () => {
    if (window.confirm('Tüm değişiklikler silinecek. Emin misiniz?')) {
      try {
        await api.updateCountries(allCountries);
        setCountryList(allCountries);
        setFilteredList(allCountries);
        console.log('Veriler başarıyla sıfırlandı!');
      } catch (error) {
        console.error('Veriler sıfırlanırken hata:', error);
        alert('Veriler sıfırlanırken bir hata oluştu!');
      }
    }
  };

  return (
    <div className="admin-panel">
      <h2>Admin Paneli</h2>
      
      <div className="admin-controls">
        <button onClick={() => navigate('/')}>Ana Menüye Dön</button>
        <button onClick={checkFlags}>Bayrakları Kontrol Et</button>
        <button onClick={handleReset} className="reset-button">Değişiklikleri Sıfırla</button>
        <input
          type="text"
          placeholder="Ülke ara..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <select
          value={difficultyFilter}
          onChange={(e) => setDifficultyFilter(e.target.value as any)}
          className="difficulty-filter"
        >
          <option value="all">Tüm Zorluk Seviyeleri</option>
          <option value="Kolay">Kolay</option>
          <option value="Orta">Orta</option>
          <option value="Zor">Zor</option>
        </select>
      </div>

      {/* Bayrak kontrol sonuçları */}
      <div className="flag-check-results">
        {missingFlags.length > 0 && (
          <div className="missing-flags">
            <h3>Eksik Bayraklar ({missingFlags.length}):</h3>
            <ul>
              {missingFlags.map(code => (
                <li key={code}>
                  {code} - {countryList.find(c => c.code === code)?.name || 'Bilinmeyen Ülke'}
                </li>
              ))}
            </ul>
          </div>
        )}

        {extraFlags.length > 0 && (
          <div className="extra-flags">
            <h3>Fazla Bayraklar ({extraFlags.length}):</h3>
            <ul>
              {extraFlags.map(code => (
                <li key={code}>{code}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="country-stats">
        <p>Toplam Ülke: {countryList.length}</p>
        <p>Kolay: {countryList.filter(c => c.difficulty === 'Kolay').length}</p>
        <p>Orta: {countryList.filter(c => c.difficulty === 'Orta').length}</p>
        <p>Zor: {countryList.filter(c => c.difficulty === 'Zor').length}</p>
      </div>

      <div className="country-table">
        <table>
          <thead>
            <tr>
              <th onClick={() => handleSort('id')} className="sortable">
                ID {sortField === 'id' && (sortDirection === 'asc' ? '↑' : '↓')}
              </th>
              <th>Bayrak</th>
              <th onClick={() => handleSort('name')} className="sortable">
                Ülke Adı {sortField === 'name' && (sortDirection === 'asc' ? '↑' : '↓')}
              </th>
              <th onClick={() => handleSort('code')} className="sortable">
                Kod {sortField === 'code' && (sortDirection === 'asc' ? '↑' : '↓')}
              </th>
              <th onClick={() => handleSort('capital')} className="sortable">
                Başkent {sortField === 'capital' && (sortDirection === 'asc' ? '↑' : '↓')}
              </th>
              <th onClick={() => handleSort('difficulty')} className="sortable">
                Zorluk {sortField === 'difficulty' && (sortDirection === 'asc' ? '↑' : '↓')}
              </th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {getSortedList().map(country => (
              <tr key={country.id}>
                <td>{country.id}</td>
                <td>
                  <img 
                    src={`/flags/${country.code}.png`} 
                    alt={country.name}
                    className="admin-flag-image"
                  />
                </td>
                <td>{country.name}</td>
                <td>{country.code}</td>
                <td>{country.capital}</td>
                <td>{country.difficulty}</td>
                <td>
                  <button onClick={() => handleEdit(country)}>Düzenle</button>
                  <button onClick={() => handleDelete(country.id)}>Sil</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editingCountry && (
        <div className="edit-modal">
          <div className="edit-modal-content">
            <h3>{editingCountry.id ? 'Ülke Düzenle' : 'Yeni Ülke Ekle'}</h3>
            <form onSubmit={(e) => {
              e.preventDefault();
              handleSave(editingCountry);
            }}>
              <div className="form-group">
                <label>Ülke Adı:</label>
                <input
                  type="text"
                  value={editingCountry.name}
                  onChange={(e) => setEditingCountry({
                    ...editingCountry,
                    name: e.target.value
                  })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Ülke Kodu (2 harf):</label>
                <input
                  type="text"
                  value={editingCountry.code}
                  onChange={(e) => setEditingCountry({
                    ...editingCountry,
                    code: e.target.value.toLowerCase()
                  })}
                  maxLength={2}
                  required
                />
              </div>
              <div className="form-group">
                <label>Başkent:</label>
                <input
                  type="text"
                  value={editingCountry.capital}
                  onChange={(e) => setEditingCountry({
                    ...editingCountry,
                    capital: e.target.value
                  })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Zorluk Seviyesi:</label>
                <select
                  value={editingCountry.difficulty}
                  onChange={(e) => setEditingCountry({
                    ...editingCountry,
                    difficulty: e.target.value as Difficulty
                  })}
                  required
                >
                  <option value="Kolay">Kolay</option>
                  <option value="Orta">Orta</option>
                  <option value="Zor">Zor</option>
                </select>
              </div>
              <div className="form-group">
                <label>Enlem:</label>
                <input
                  type="number"
                  step="0.0001"
                  value={editingCountry.location.lat}
                  onChange={(e) => setEditingCountry({
                    ...editingCountry,
                    location: {
                      ...editingCountry.location,
                      lat: parseFloat(e.target.value)
                    }
                  })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Boylam:</label>
                <input
                  type="number"
                  step="0.0001"
                  value={editingCountry.location.lng}
                  onChange={(e) => setEditingCountry({
                    ...editingCountry,
                    location: {
                      ...editingCountry.location,
                      lng: parseFloat(e.target.value)
                    }
                  })}
                  required
                />
              </div>
              <div className="form-buttons">
                <button type="submit">Kaydet</button>
                <button type="button" onClick={() => setEditingCountry(null)}>İptal</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel; 