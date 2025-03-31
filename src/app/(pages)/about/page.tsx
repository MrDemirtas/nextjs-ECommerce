"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold mb-3">Hakkımızda</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Yenilikçi çözümler ve kaliteli ürünlerle müşterilerimize en iyi
          hizmeti sunuyoruz.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Şirketimiz</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400">
              Şirketimiz 20XX yılında kurulmuş olup, müşterilerimize en kaliteli
              ürünleri sunmayı hedeflemektedir.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Misyonumuz</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400">
              Müşteri memnuniyetini ön planda tutarak, yenilikçi çözümler sunmak
              ve kalite standartlarımızdan ödün vermeden hizmet vermek.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Ekibimiz</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400">
              Uzman ve deneyimli ekibimizle müşterilerimize en iyi hizmeti
              sunmak için çalışıyoruz.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800/30 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Neden Biz?</h2>
        <ul className="space-y-2">
          <li className="flex items-center">
            <span className="mr-2">•</span>
            <span>Yüksek kalite standartları</span>
          </li>
          <li className="flex items-center">
            <span className="mr-2">•</span>
            <span>Müşteri odaklı yaklaşım</span>
          </li>
          <li className="flex items-center">
            <span className="mr-2">•</span>
            <span>Yenilikçi çözümler</span>
          </li>
          <li className="flex items-center">
            <span className="mr-2">•</span>
            <span>Uzman kadro</span>
          </li>
        </ul>
      </div>

      <div className="text-center">
        <Button variant="outline">Bizimle İletişime Geçin</Button>
      </div>
    </div>
  );
}
