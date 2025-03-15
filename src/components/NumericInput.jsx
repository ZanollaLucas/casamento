import React, { useState } from "react";
import QRCode from "react-qr-code";
import { stripHtml } from "string-strip-html";
import pkg from "steplix-emv-qrcps";
const { Merchant } = pkg;

const NumericInput = () => {
  const [value, setValue] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [payload, setPayload] = useState("");

  const formatInput = (input) => {
    return input.replace(/[^0-9.,]/g, "").replace(/,/g, ".");
  };

  const generateQRCode = () => {
    const brCode = new BrCode("lucas10.zanolla@gmail.com", value, "Lucas Zanolla", null, "email", "Passo Fundo");
    const payload = brCode.generate_qrcp();
    setPayload(payload);
    setQrCode(payload);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(formatInput(e.target.value))}
        placeholder="Digite o valor (ex: 10.24)"
        style={{ padding: "10px", fontSize: "16px", marginRight: "10px" }}
      />
      <button onClick={generateQRCode} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Gerar QR Code
      </button>

      {qrCode && (
        <div style={{ marginTop: "20px" }}>
          <QRCode value={qrCode} size={150} />
          <p>Payload: {payload}</p>
        </div>
      )}
    </div>
  );
};

class BrCode {
  constructor(key, amount, name, reference, key_type, city) {
    this.key = this.normalize(key);
    this.amount = this.normalize(amount);
    this.name = this.normalize(name);
    this.reference = this.normalize(reference);
    this.key_type = this.normalize(key_type);
    this.city = this.normalize(city);
  }

  static format_text(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
  }

  normalize(text) {
    return text ? stripHtml(text).result : "";
  }

  formated_name() {
    return this.constructor.format_text(this.name);
  }

  formated_city() {
    return this.constructor.format_text(this.city);
  }

  formated_amount() {
    return this.amount ? this.amount.replace(",", ".") : "";
  }

  formated_referance() {
    return this.constructor.format_text(this.reference).replace(" ", "");
  }

  formated_key() {
    let rkey = this.key;
    const ktype = this.key_type.toLowerCase();
    if (["telefone", "cnpj", "cpf"].includes(ktype)) {
      rkey = rkey.replace(/\D/g, "");
    }
    if (ktype === "telefone") {
      rkey = "+55" + rkey;
    }
    return rkey.trim();
  }

  generate_qrcp() {
    const emvqr = Merchant.buildEMVQR();
    emvqr.setPayloadFormatIndicator("01");
    emvqr.setCountryCode("BR");
    emvqr.setMerchantCategoryCode("0000");
    emvqr.setTransactionCurrency("986");

    const merchantAccountInformation = Merchant.buildMerchantAccountInformation();
    merchantAccountInformation.setGloballyUniqueIdentifier("BR.GOV.BCB.PIX");
    merchantAccountInformation.addPaymentNetworkSpecific("01", this.formated_key());
    emvqr.addMerchantAccountInformation("26", merchantAccountInformation);

    if (this.name) emvqr.setMerchantName(this.formated_name());
    if (this.city) emvqr.setMerchantCity(this.formated_city());
    if (this.amount) emvqr.setTransactionAmount(this.formated_amount());

    const additionalDataFieldTemplate = Merchant.buildAdditionalDataFieldTemplate();
    additionalDataFieldTemplate.setReferenceLabel(this.reference ? this.formated_referance() : "***");
    emvqr.setAdditionalDataFieldTemplate(additionalDataFieldTemplate);

    return emvqr.generatePayload();
  }
}

export default NumericInput;
