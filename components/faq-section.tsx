'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function FAQSection() {
  const faqs = [
    {
      question: 'Bagaimana saya tahu proyek tidak akan molor?',
      answer:
        'Kami menggunakan sistem manajemen proyek terukur dengan laporan harian real-time. Setiap milestone tercatat dengan jelas, tim ahli kami berjaga 24/7, dan Anda mendapat akses dashboard monitoring untuk tracking progres kapan saja. Ketepatan waktu adalah komitmen kami — atau kami yang bayar penalty.',
    },
    {
      question: 'Bagaimana jaminan kualitas sesuai spesifikasi?',
      answer:
        'Setiap material dan hasil kerja melalui quality control berlapis oleh engineer bersertifikat. Kami tidak menggunakan subkontraktor sembarangan — hanya mitra berpengalaman yang telah terbukti. Inspeksi bulanan dan final walkthrough bersama Anda memastikan standar premium terpenuhi 100%.',
    },
    {
      question: 'Bagaimana agar biaya tidak bengkak di tengah proyek?',
      answer:
        'RAB kami bersifat fixed price dengan breakdown detail per item. Jika ada perubahan scope, kami memberikan penawaran written dan approval formal sebelum eksekusi. Transparansi biaya penuh — tidak ada biaya tersembunyi atau markup mengejutkan.',
    },
    {
      question: 'Apakah ada garansi untuk hasil pekerjaan?',
      answer:
        'Ya, kami memberikan garansi tertulis untuk semua pekerjaan konstruksi sesuai dengan spesifikasi yang disepakati. Garansi berlaku selama periode yang ditentukan, dan tim kami siap melakukan perbaikan jika diperlukan tanpa biaya tambahan.',
    },
    {
      question: 'Berapa lama timeline proyek konstruksi?',
      answer:
        'Timeline tergantung pada skala dan jenis proyek. Setelah survei lokasi dan konsultasi mendalam, kami akan memberikan jadwal detail yang terukur. Kami selalu berusaha menyelesaikan proyek lebih cepat dari jadwal yang disepakati.',
    },
  ]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-muted-foreground">
            Jawaban untuk kekhawatiran umum tentang proyek konstruksi
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-foreground hover:text-accent py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
